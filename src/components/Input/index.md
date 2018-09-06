`<Input />` allow users to enter text into a UI. They typically appear in forms and dialogs.

```js
<div style={{ width: 275 }}>
  <Input defaultValue="H&M" />
</div>
```

```js
<div style={{ width: 275 }}>
  <Input placeholder="Placeholder" />
</div>
```

```js
<div style={{ width: 275 }}>
  <Input disabled readOnly value="Disabled" />
</div>
```

You can specify `prefix` and `suffix` prop to create input adornments and indicate, for example, a search field.

```js
const Search = require('../Icons/Search').default;
const Close = require('../Icons/Close').default;
const IconButton = require('../IconButton').default;
<div style={{ width: 275 }}>
  <Input
    defaultValue="Plu"
    prefix={<Search color="#bfc3da" />}
    suffix={
      <IconButton backgroundColor="transparent" onClick={() => alert('You clicked me!')}>
        <Close color="#bfc3da" />
      </IconButton>
    }
  />
</div>;
```

We have a special `password` `<Input />` which places a suffix by default which allows it to trigger password visibility.

```js
  <div style={{ width: 275 }}>
    <Input defaultValue="password" type="password" />
  </div>
```

You can choose text color by using `variant` prop.

```js
<div style={{ display: 'flex', flexDirection: 'column', maxWidth: 275 }}>
  <Input variant="success" defaultValue="Success" />
  <br />
  <Input variant="warning" defaultValue="Warning" />
  <br />
  <Input variant="alert" defaultValue="Alert" />
</div>
```
