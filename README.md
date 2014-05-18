# Hull Form Components


This app allows you to design and deploy ready to use forms for your [hull](http://hull.io) apps.


## Usage and Installation


### Pulling from the source 

You can directly use these components in your apps by adding this repo as a component source : 

```
Hull.init({
  appId: 'xxxx',
  orgUrl: 'https://zzzzz.hullapp.io',
  sources: {
    formbuilder: 'https://hull-components.github.io/formbuilder'
  }
})
```

### Building in your app


Please refer to our [grunt-hull-components](http://github.com/hull/grunt-hull-components) [grunt](http://gruntjs.com/) task for instructions to build hull components locally.

## Components

### builder

A visual form builder to build custom forms. Based on [dobtco/formbuilder](https://github.com/dobtco/formbuilder)


**example**


![builder](/docs/builder.png)


```html
<div data-hull-component="builder@formbuilder" data-hull-id="entity:my-super-form"></div>
```

---

### form

Displays a form built with [builder](#builder).

Comes with : 

* [ParsleyJS](http://parsleyjs.org/) for validations.
* [Pikaday](https://github.com/dbushell/Pikaday) for the date picker.


**example**


![form](/docs/form.png)


```html
<div data-hull-component="form@formbuilder" data-hull-id="entity:my-super-form"></div>
```

---

### modal

Displays the form in a modal on page load. (Requires bootstrap 3).


**example**

```html
<div data-hull-component="modal@formbuilder" data-hull-id="entity:my-super-form"></div>
```


## Development


Install grunt and dependencies 

    npm install -g grunt-cli
    npm install 

Start the default grunt task

    grunt
    open http://localhost:8000

To deploy to gh-pages

    grunt dist


