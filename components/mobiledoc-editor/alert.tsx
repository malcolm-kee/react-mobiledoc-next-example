import * as React from 'react';
import { classToDOMCard } from 'react-mobiledoc-editor';
import type { CardProps } from 'react-mobiledoc-editor';

export class Alert extends React.Component<CardProps> {
  static displayName = 'AlertCard';

  render() {
    const { isEditing, isInEditor, edit, payload = {}, save } = this.props;

    const { variant = 'success', text = 'Message' } = payload as any;

    if (isEditing) {
      return (
        <EditableAlert initialValue={text} variant={variant} onSave={save} />
      );
    }

    return (
      <Container variant={variant}>
        {text}
        {isInEditor && (
          <button
            onClick={edit}
            type="button"
            className="text-xs absolute top-1 right-1 invisible group-hover:visible"
          >
            Edit
          </button>
        )}
      </Container>
    );
  }
}

export const AlertCard = classToDOMCard(Alert);

const EditableAlert = (props: {
  initialValue: string;
  variant: 'success' | 'error';
  onSave: (payload: object) => void;
}) => {
  const [text, setText] = React.useState(props.initialValue);
  const [variant, setVariant] = React.useState(props.variant);

  return (
    <Container variant={variant}>
      <input value={text} onChange={(ev) => setText(ev.target.value)} />
      <select
        value={variant}
        onChange={(ev) => setVariant(ev.target.value as any)}
      >
        <option value="success">Success</option>
        <option value="error">Error</option>
      </select>
      <button
        onClick={() =>
          props.onSave({
            variant,
            text,
          })
        }
        type="button"
        className="text-xs absolute top-1 right-1"
      >
        Save
      </button>
    </Container>
  );
};

const Container = (props: {
  variant: 'success' | 'error';
  children: React.ReactNode;
}) => (
  <div
    className={`relative group px-4 py-3 rounded ${
      classByVariant[props.variant]
    }`}
  >
    {props.children}
  </div>
);

const classByVariant = {
  success: 'bg-green-100 text-green-800',
  error: 'bg-red-100 text-red-800',
};
