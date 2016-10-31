# React-Newline-to-Break
Converts your strings with newlines ("\n") to error/warning free React components.


### Installation
```bash
npm i react-newline-to-break --save
```

### Usage

First, require it from your app's JavaScript files with:
```bash
import nl2br from 'react-newline-to-break';
```

### Example

```js
import React from 'react';
import nl2br from 'react-newline-to-break'; 


class App extends React.Component {

  render() {
    let myString = "Hello I am cool\nbut you are too\n\nCan we be friends?"
    return (
      <div>
        {nl2br(myString)}
      </div>
    );
  }
}
```

this will render into something like
```js
<div>
    <span key={0}>
        Hello I am cool
        <br/>
    </span>
    <span key={1}>
        but you are too
        <br/>
    </span>
    <span key={2}>
        <br/>
    </span>
    <span key={3}>
        Can we be friends?
        <br/>
    </span>
</div>

```

Hello I am cool
but you are too

Can we be friends?