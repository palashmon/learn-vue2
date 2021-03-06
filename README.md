# Learning VueJS 2 Basics

<h1 align="center">
  <img src="https://s3.amazonaws.com/revue/items/images/001/602/574/mail/learning-vue-step-by-step.png" style="max-width:100%" alt="Learning VueJS 2 Basics" />
</h1>

This repo contains some simplest case examples on VueJS 2 for learning purpose. I also add my daily
logs here, about what I have learned so far to keep track of my progress.

---

## DAILY LOGS

### Day 1: 24 Oct 2017

* [x] Learned about creating a new Vue Instance and declarative rendering.

### Day 2: 25 Oct 2017

* [x] Learned about handling data and methods in VueJS 2.
* [x] Learned about data binding and interpolation.

### Day 3: 26 Oct 2017

* [x] Learned about [event handling][events] in VueJS 2
* [x] Looked into various [event modifiers][event-modifiers] provided by Vue

### Day 4: 30 Oct 2017

* [x] Learned about keyboard event handling and [key modifiers][key-modifiers]
* [x] Two-way [data binding][two-way-binding] using [v-model][vmodel]

### Day 5: 31 Oct 2017

* [x] Learned about [Computed Properties][computed-properties]
* [x] Dynamic CSS Classes using [`v-bind:class`][v-bind-class]
* [x] [Conditional rendering][conditional-rendering] of DOM elements

### Day 6: 2 Nov 2017

* [x] Learned about how we can use the `v-for` directive to [render a list][v-for-list] of items
      based on an array, object and template.
* [x] Worked on a small assignment to create a small game using all VueJS concepts learned so far.

### Day 7: 4 Nov 2017

* [x] Learned about using multiple Vue Instances and interacting between them.
* [x] Also, learned about using [Components][components] in Vue.

### Day 8: 6 Nov 2017

* [x] Learned about using [Refs][refs] in VueJS.
* [x] `ref` is used to register a reference to an element or a child component.
* [x] Learned about [vue-cli][vuecli], for scaffolding Vue.js projects.

### Day 9: 9 Nov 2017

* [x] Looked into Vue files & the root Component.
* [x] Created our first `*.vue` file.
* [x] Learned about nesting components both globally and locally.

### Day 10: 10 Nov 2017

* [x] Learned about [Component-Scoped CSS][component-scoped-css]
* [x] Component-Scoped CSS helps in creating styling that is scoped to single-file component only
      and this styling does not interferes with other component styling.

### Day 11: 13 Nov 2017

* [x] Learned more about nesting components.
* [x] Created separate components for header, footer & content

### Day 12: 14 Nov 2017

* [x] Learned about [props][props] in VueJS.
* [x] A `prop` is a custom attribute for passing information from parent components.
* [x] In Vue, the parent-child component relationship can be summarized as **props down, events
      up**. The parent passes data down to the child via **props**, and the child sends messages to
      the parent via **events**. <p align="center">
      <img src="https://vuejs.org/images/props-events.png" width="350"/> </p>

### Day 13: 15 Nov 2017

* [x] Today learned about Primitive vs Reference types of props passed from parent to child and how
      it effects parent data once prop data is modified in child components in case of reference
      type data.
* [x] Primitive types include `String`, `Number`, `Boolean` and `Symbol`.
* [x] Reference types include `Object` and `Array`.

### Day 14: 16 Nov 2017

* [x] Learned about using `v-on` with [Custom Events][custom-events].
* [x] We can actually listen to an `$emit` event from a child with `v-on` in parent component.

### Day 15: 17 Nov 2017

* [x] Learned about creating a global [Event Bus][event-bus] with VueJS.
* [x] We could manage communication between components with a single event bus.

### Day 16: 20 Nov 2017

* [x] Learned about Vue [lifecycle hooks][lifecycle-hooks].
* [x] It gives users the opportunity to add their own code at specific stages Vue instance
      initialization.
* [x] For example, the `created` hook can be used to run code after an instance is created.

```js
new Vue({
	data: {
		a: 1
	},
	created: function() {
		// `this` points to the vm instance
		console.log('a is: ' + this.a);
	}
});
// => "a is: 1"
```

### Day 17: 22 Nov 2017

* [x] Today learned about using [slots][slots-vue] in VueJS.
* [x] It mainly allow a parent component to pass DOM elements into a child component.

### Day 18: 23 Nov 2017

* [x] Learned about using [Dynamic Components][dynamic-components].
* [x] We can dynamically switch between multiple components using the reserved `<d>` element and
      dynamically bind to its `is` attribute.

```vue
<component v-bind:is="currentView">
  <!-- component changes when currentView data changes! -->
</component>
```

### Day 19: 28 Nov 2017

* [x] Learned about basic usage of form [input binding][basic-usage-input].
* [x] Learned about form [modifiers][modifiers] like `.lazy`, `.number` and `.trim`.

### Day 20: 29 Nov 2017

* [x] Learned about single [checkbox][checkbox] and multiple checkboxes binding.

### Day 21: 30 Nov 2017

* [x] Learned about [select][select] box binding.
* [x] Also, about how we can make HTTP post requests using [`vue-resource`][vue-resource].

### Day 22: 01 Dec 2017

* [x] Learned about how we can make HTTP GET request using `vue-resource`.
* [x] Also, about how we can read & display the response data returned from this http request.

### Day 23: 02 Dec 2017

* [x] Learned about how we can create [custom directives][custom-directive] and implement custom
      behaviours in our applications.
* [x] Learned about directive [hook functions][hook-fn] and [hook arguments][hook-arg].
* [x] Using [filters][filters] to apply common text formatting.

```vue
<div>
    <!-- 'capitalize' is a filter function which will receive the value of 'message' as its argument -->
    {{ message | capitalize }}
</div>
```

### Day 25: 04 Dec 2017

* [x] Created a custom [search filter][filtered-sorted-results] using computed properties.
* [x] Learned about how we can register filters and directives locally.
* [x] Also, about how to use [mixins][mixins].
* [x] Mixins are a flexible way to distribute reusable functionalities for Vue components.

### Day 26: 05 Dec 2017

* [x] Learned about basic usage of [vue-router library][vue-router].

### Day 27: 07 Dec 2017

* [x] Learned about [routing modes][routing-mode]: "hash" & "history".
* [x] Enabling user navigation using [`<router-link>`][router-link] component.

### Day 28: 11 Dec 2017

* [x] Learned about [Dynamic Route Matching][dynamic-route-matching].
* [x] Also, learned how we can fetch dynamic segment in route path, which start with a colon `:`.

```js
const router = new VueRouter({
	routes: [
		// dynamic segments start with a colon
		{ path: '/user/:id', component: User }
	]
});
```

* [x] You can check out a simple live example [here][dynamic-route-matching2].

### Day 29: 12 Dec 2017

* [x] Learned about setting up [Firebase database][firebase].
* [x] Learned about saving data to <em>Firebase database</em>.

### Day 30: 18 Dec 2017

* [x] Learned about how we can retrieve posts from Firebase.
* [x] Display specific post based on post key stored in Firebase.

<!-- All links are added here -->

[events]: https://vuejs.org/v2/guide/events.html
[event-modifiers]: https://vuejs.org/v2/guide/events.html#Event-Modifiers
[key-modifiers]: https://v1.vuejs.org/guide/events.html#Key-Modifiers
[two-way-binding]: https://v1.vuejs.org/guide/index.html#Two-way-Binding
[vmodel]: https://v1.vuejs.org/api/#v-model
[computed-properties]: https://vuejs.org/v2/guide/computed.html#Computed-Properties
[v-bind-class]: https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax
[conditional-rendering]: https://vuejs.org/v2/guide/conditional.html#ad
[v-for-list]: https://vuejs.org/v2/guide/list.html
[components]: https://vuejs.org/v2/guide/components.html
[refs]: https://vuejs.org/v2/api/#ref
[vuecli]: https://github.com/vuejs/vue-cli#vue-cli--
[component-scoped-css]: https://vuejs.org/v2/guide/comparison.html#Component-Scoped-CSS
[props]: https://vuejs.org/v2/guide/components.html#Props
[custom-events]: https://vuejs.org/v2/guide/components.html#Using-v-on-with-Custom-Events
[event-bus]: https://alligator.io/vuejs/global-event-bus/
[lifecycle-hooks]: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
[slots-vue]: https://vuejs.org/v2/guide/components.html#Content-Distribution-with-Slots
[dynamic-components]: https://vuejs.org/v2/guide/components.html#Dynamic-Components
[basic-usage-input]: https://vuejs.org/v2/guide/forms.html#Basic-Usage
[modifiers]: https://vuejs.org/v2/guide/forms.html#Modifiers
[checkbox]: https://vuejs.org/v2/guide/forms.html#Checkbox
[select]: https://vuejs.org/v2/guide/forms.html#Select
[vue-resource]: https://github.com/pagekit/vue-resource
[custom-directive]: https://vuejs.org/v2/guide/custom-directive.html
[hook-fn]: https://vuejs.org/v2/guide/custom-directive.html#Hook-Functions
[hook-arg]: https://vuejs.org/v2/guide/custom-directive.html#Directive-Hook-Arguments
[filters]: https://vuejs.org/v2/guide/filters.html
[filtered-sorted-results]: https://vuejs.org/v2/guide/list.html#Displaying-Filtered-Sorted-Results
[mixins]: https://vuejs.org/v2/guide/mixins.html#ad
[vue-router]: https://router.vuejs.org/en/essentials/getting-started.html
[routing-mode]: https://router.vuejs.org/en/api/options.html#mode
[router-link]: https://router.vuejs.org/en/api/router-link.html
[dynamic-route-matching]: https://router.vuejs.org/en/essentials/dynamic-matching.html
[dynamic-route-matching2]: https://jsfiddle.net/Lb0h803v/
[firebase]: https://firebase.google.com/
