`<Typography />` component wraps a collection of symbols for quickly mocking up web applications, created by your friends at GoJob and conceived to be used in the FoG project.

Besides the somewhat obvious need they fill (people sometimes want to put headlines on top of things), the headline tags also have SEO value, help you to be a more organized writer, and make pages more user-friendly.

Read more: https://html.com/tags/heading/#ixzz5Jo977u2P

On a page with a single piece of content (which should be most pages), the main title for that content should be an `<Typography variant="main-title" />` tag. 

```js
  <Typography variant="main-title">h1 - This is a main title</Typography>
```

The main title could sometimes use a little subtitle to adjust the context of the message - for this - please use `<Typography variant="headline2" />` tag.

```js
  <Typography variant="headline2">h2 - This is a headline</Typography>
```

Major sections within that content should be headlined with `<Typography variant="headline3" />`.

```js
  <Typography variant="headline3">h3 - This is a section title</Typography>
```

Subsections within those sections should be headed with `<Typography variant="headline4" />`

```js
  <Typography variant="headline4">h4 - This is a section subtitle</Typography>
```

And this is the base text, that you can dive into! Just read this beautiful __lorem ipsum__ bellow!

To make one yourself, you can use the default `<Typography />` component.

```js
  <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.
    <br/><br/>
    Mauris lacinia porta faucibus. Fusce eu est ac eros vulputate mollis in ac felis. Aenean commodo scelerisque mi sed imperdiet. Donec at hendrerit nisi, eget vestibulum nisi. Sed sit amet magna luctus, facilisis erat quis, sagittis ligula. Aenean dignissim velit quis leo consequat ultricies. Proin quis pretium justo. Vestibulum at eros nisl. Fusce lobortis erat ante, eu cursus sapien molestie at. Pellentesque placerat ante diam, et euismod lacus dictum vel. Phasellus vitae sollicitudin mi.
    <br/><br/>
    In pulvinar eleifend convallis. Suspendisse elit erat, venenatis eget ullamcorper ut, laoreet iaculis nisl. Sed porta, felis id rhoncus aliquet, quam ipsum pellentesque metus, in sodales quam nunc vitae risus.
  </Typography>
```

You can render a label (generally rendered above inputs) with `<Typography variant="label" />`.

```js
  <Typography variant="label">Input headline</Typography>
```

Here are some other, more rare `<Typography>` variants:

```js
  const s = { style: { padding: 14 } };
  <div style={{ display: 'flex', flexDirection: 'column', placeItems: 'center' }}>
    <Typography variant="placeholder" {...s}>Placeholder</Typography>
    <Typography variant="table-item" {...s}>Table Item</Typography>
    <Typography variant="table-value" {...s}>Table Value</Typography>
    <Typography variant="link" {...s}>Text Link</Typography>
    <Typography variant="link-cancel" {...s}>Text Link - Cancel</Typography>
    <Typography variant="caption" {...s}>Caption</Typography>
    <Typography variant="breadcrumb" {...s}>Breadcrumb navigation</Typography>
  </div>
```

You can also apply a color to a text to indicate some states, such as __"text"__, __"primary"__, __"placeholder"__, __"alert"__, __"success"__ or __"warning"__.

```js
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Typography color="text">I am text</Typography>
    <Typography color="primary">I am primary</Typography>
    <Typography color="placeholder">I am placeholder</Typography>
    <Typography color="alert">I am alert</Typography>
    <Typography color="success">I am success</Typography>
    <Typography color="warning">I am warning</Typography>
  </div>
```