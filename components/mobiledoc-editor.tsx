import {
  Container,
  ContainerProps,
  Editor,
  Toolbar,
  ReactMobileDocContext,
} from 'react-mobiledoc-editor';
import { AlertCard } from './mobiledoc-editor/alert';
import * as React from 'react';

const AlertButton = () => {
  const { editor } = React.useContext(ReactMobileDocContext);

  return (
    <button
      onClick={() =>
        editor.insertCard('AlertCard', {
          variant: 'success',
          text: 'Hello',
        })
      }
      className="px-3 py-1 shadow"
    >
      Alert
    </button>
  );
};

export default function MobileDocEditor(props: ContainerProps) {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <Container {...props} cards={[AlertCard]}>
        <Toolbar className="flex items-center gap-3 px-4 py-1 border-b border-gray-200" />
        <div className="py-2">
          <p className="text-xs text-gray-500">Custom components</p>
          <AlertButton />
        </div>
        <div className="border border-gray-100 p-3 focus-within:ring">
          <Editor className="prose max-w-none focus-visible:outline-none" />
        </div>
      </Container>
    </div>
  );
}
