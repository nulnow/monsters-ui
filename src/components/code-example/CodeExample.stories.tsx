import React from 'react';
import CodeExample from "./CodeExample";

export default {
  title: 'Components/CodeExample',
  component: CodeExample,
};

const CodeExampleStory = ({ ...args }) => (
  <CodeExample {...args} />
);

export const CodeExampleDefault: any = CodeExampleStory.bind({});
CodeExampleDefault.args = {
  children: `import React from 'react';
import { render } from 'react-dom';
import { Switch } from 'monsters-ui';

const App = () => {
  return (
     <>
       <Switch />
     </>
  );
};

render(<App />, document.getElementById('#root'))
`
};
