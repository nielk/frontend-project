Icon buttons are commonly found in app bars and toolbars.

Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as
adding or removing a star to an item.

> Please import your icons from the
> [@gojob/icons (front-office-icons) library](/#404).

```js
const JustifyAll = require('../Icons/JustifyAll').default;
const Search = require('../Icons/Search').default;
const Coat = require('../Icons/Coat').default;
const User = require('../Icons/User').default;
const Graduate = require('../Icons/Graduate').default;
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
  <IconButton>
    <JustifyAll />
  </IconButton>
  <IconButton>
    <Search />
  </IconButton>
  <IconButton>
    <Coat />
  </IconButton>
  <IconButton>
    <User />
  </IconButton>
  <IconButton>
    <Graduate />
  </IconButton>
</div>;
```

You may make the `<IconButton />` clickable by binding `onClick` property

```js
const JustifyAll = require('../Icons/JustifyAll').default;
<IconButton onClick={() => alert('That tickles!')}>
  <JustifyAll />
</IconButton>;
```

You may specify various sizes of `<IconButton />` by using `size` property.

```js
const JustifyAll = require('../Icons/JustifyAll').default;
const Search = require('../Icons/Search').default;
const Coat = require('../Icons/Coat').default;
const User = require('../Icons/User').default;
const Graduate = require('../Icons/Graduate').default;
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
  <IconButton size="xs">
    <JustifyAll />
  </IconButton>
  <IconButton size="sm">
    <Search />
  </IconButton>
  <IconButton size="md">
    <Coat />
  </IconButton>
  <IconButton size="lg">
    <User />
  </IconButton>
  <IconButton size="xl">
    <Graduate />
  </IconButton>
</div>;
```

You can also change the background and foreground color of `<IconButton />` by specifying `backgroundColor`
and `color` props respectively.

```js
const JustifyAll = require('../Icons/JustifyAll').default;
const Search = require('../Icons/Search').default;
const Coat = require('../Icons/Coat').default;
const User = require('../Icons/User').default;
const Graduate = require('../Icons/Graduate').default;
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
  <IconButton backgroundColor="alert" color="primary">
    <JustifyAll />
  </IconButton>
  <IconButton backgroundColor="success" color="disabled">
    <Search />
  </IconButton>
  <IconButton backgroundColor="primary" color="white">
    <Coat />
  </IconButton>
  <IconButton backgroundColor="transparent" color="melrose">
    <User />
  </IconButton>
  <IconButton backgroundColor="melrose" color="input">
    <Graduate />
  </IconButton>
</div>;
```
