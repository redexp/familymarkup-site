import {visit} from 'unist-util-visit';
import {toText} from 'hast-util-to-text';
import highlight from 'highlight-familymarkup';

/**
 * @param {import('highlight-familymarkup').Params} params
 * @returns {function(*, *)}
 */
export default function (params = {}) {
	params = {...params, ast: true};

	return function (tree, file) {
		visit(tree, 'element', function (node, _, parent) {
			if (
				node.tagName !== 'code' ||
				!parent ||
				parent.type !== 'element' ||
				parent.tagName !== 'pre'
			) {
				return;
			}

			try {
				var {ast} = highlight(toText(parent), params);
			}
			catch (err) {
				file.message(
					'Cannot highlight',
					{
						ancestors: [parent, node],
						cause: err,
						place: node.position,
						ruleId: 'missing-language',
						source: 'rehype-familymarkup',
					}
				);

				return;
			}

			parent.properties.className = ['language-fml'];
			node.children = ast;
		});
	};
}