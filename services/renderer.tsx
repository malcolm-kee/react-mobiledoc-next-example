import Renderer, { getMarkupComponentDefault } from 'mobiledoc-vdom-renderer';
import * as React from 'react';
import Link from 'next/link';
import { Alert } from '../components/mobiledoc-editor/alert';

export const render = Renderer({
  createElement: React.createElement,
  getCardComponent: (type) => {
    if (type === 'image') {
      return Image as any;
    }
    if (type === 'AlertCard') {
      return Alert;
    }
    return type;
  },
  getMarkupComponent: (type) => {
    if (type === 'a') {
      return function CustomLink(props) {
        const { href, ...attributes } = props as object & { href: string };
        return (
          <Link href={href}>
            <a className="text-blue-500 hover:underline" {...attributes} />
          </Link>
        );
      };
    }

    return getMarkupComponentDefault(type);
  },
});

function Image(props: { payload: React.ComponentPropsWithoutRef<'img'> }) {
  return (
    <img
      style={{
        width: '100%',
        height: 'auto',
      }}
      {...props.payload}
      alt=""
    />
  );
}
