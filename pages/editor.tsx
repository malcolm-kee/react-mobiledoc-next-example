import dynamic from 'next/dynamic';
import * as React from 'react';
import { render } from '../services/renderer';

const Editor = dynamic(() => import('../components/mobiledoc-editor'), {
  ssr: false,
});

export default function EditorPage() {
  const [val, setVal] = React.useState(undefined);
  const [mode, setMode] = React.useState<'edit' | 'preview'>('edit');

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="p-3">
        <button
          onClick={() => setMode(mode === 'edit' ? 'preview' : 'edit')}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          {mode === 'edit' ? 'Preview' : 'Edit'}
        </button>
      </div>
      {mode === 'edit' ? (
        <Editor mobiledoc={val} onChange={setVal} />
      ) : (
        val &&
        React.createElement(
          'div',
          {
            className: 'prose max-w-none',
          },
          ...render(val)
        )
      )}
      {val && <pre>{JSON.stringify(val, null, 2)}</pre>}
    </div>
  );
}
