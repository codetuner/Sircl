Sircl - Reference
=================

## Navigation

### Any element can be a link

Any element will behave as a link when it has a `href` attribute.

I.e: clicking on a table row:
~~~html
<tr href="/nov/15">
  <td>15</td>
  <td>November</td>
</tr>
~~~

### Special links

#### `href="null"`

A href="null" will represent a link that has no action.

#### `href="history:back"`

Clicking a href="history:back" link will bring the browser back to the previous page.

~~~html
<a href="history:back">Go back</a>
~~~

#### `href="location:reload"`

Clicking a href="location:reload" link will reload the current page.

~~~html
<a href="location:reload">Refresh</a>
~~~

### Forwarding events

The click on an element can be forward to another element using the `forward-click` attribute that contains a **CSS selector** of the element to forward the click to. I.e:

~~~html
<div forward-click="#id1">Click me!</a>
<a id="id1" href="http://www.example.com/">The link</a>
~~~

The original click event is canceled.

### Inline targets

In standard HTML, with the `target="..."` attribute on a link or form, a new or other browser window/tab can be defined as target of the link.

With the `inline-target="..."` attribute you can now also define a part of the current page as target of the link or form submission.
The inline-target value must be a **CSS selector** to the DOM element to use as target.

If you define `inline-target` on the form, it will be applicable for the whole form, no matter how it is submitted.

If you define `inline-target` on a submit button, it will only apply when submitting the form through that button.
Note that the form will also be marked 'dirty'.

If you define `inline-target` on an element with `onchange-submit`, it will apply when submitting the form because of a change on the targeted element.

#### Dialogs

If the inline target points to an element within a ".modal" element, then the modal dialog holding the inline target is automatically shown.

#### Tracking history

Default behavior when you navigate, is that the browser displays the new link in the address bar and registers a new history entry, allowing the user to navigate back.

When navigating to an inline target, default behavior is that the address bar is unchanged and no new history entry is recorded.

With `history="..."` you can define different behavior: 

##### `history="default"` or not set

Explicitly request default behavior.

##### `history="push"`

Update the browser address bar and register a new history entry. When applied to a link with an inline target, this makes the
link behave as one that targets the current window.

##### `history="set"`

Update the browser address bar without registering a new history entry.

#### Inline caching

By default, when pressing the browsers back button, the (previous) page is reloaded. When an inline target was used in
combination with `history="push"`, setting `inline-cached="true"`, pressing the back button will restore the previous
state from cache.

~~~html
<a href="http://www.example.com/" inline-target="#my-inline-target" history="push" inline-cached="true">Example</a>
<div id="my-inline-target">
Original content
</div>
<a href="history:back">Back</a>
~~~



### Confirm Messages

The `confirm-message` attribute defines a message that is asked by means of a browser confirm dialog.
The default button or link click behavior is only performed if the user confirms the action.

~~~html
<a href="/Exit" confirm-message="Are you sure ?">Quit</a>
<button type="submit" confirm-message="Are you sure ?">Submit</a>
~~~

---

## Forms

### Default buttons

The `default-submit` attribute on a form element, containins a selector to an element inside the form, will make this element the default action when pressing the **[Enter]** key in the form.

The `default-cancel` attribute on a form element, containins a selector to an element inside the form, will make this element the default action when pressing the **[Esc]** key in the form.

~~~html
<form default-submit=".submit" default-cancel=".cancel">
  <p>Press ENTER to ESC in this form or textbox:
     <input type="text"></p>
  <button class="submit">OK</button>
  <button class="cancel">Cancel</button>
</a>
~~~

### AutoInit selects

The `autoinit` attribute on a select element allows to initialize the value of a select when it is initially empty.

Following values are supported:

- "first" : selects the first non-empty value if no value was selected yet.
- "singleton" : selects the first non-empty value of no value was selected yet AND if no other non-empty value exist.
- any other value : selects the option with that value if no value was selected yet.

~~~html
<select name="city" autoinit="singleton">
  <option></option>
  <option value="456">Only allowed option</option>
</select>
~~~

### Autofocus

The HTML standard `autofocus` attribute will also function with delayed loaded parts and inside (bootstrap) dialogs.

### Spinning buttons on submit

If you are using FontAwesome, you can define spinners on buttons that will result in a spinning wheel when the button is pressed.

To *add* a spinner when the button is pressed, set an element with spinner class:
~~~html
<button><i class="spinner"></i> Submit</button>
~~~

To have an element *replaced* by a spinner, apply the spinner class on the element to replace:
~~~html
<button><i class="spinner fas fa-save"></i> Save</button>
~~~

This will show a Save button with save icon. When pressed, the save icon will be replaced by a spinner.

** *Note that this feature requires the FontAwesome and "sircl-fa" libraries.*

---

## Dialogs (Bootstrap modals)

### Restore content

When a dialog is show, it's content becomes visible. If it's content is lazy loaded, there may be a period during which the
previous content of the dialog is visible.

When having a dialog with lazy loaded content (content that is loaded when the dialog shows), make the initial content of the
dialog a 'waiting screen'.

Then, to make sure the waiting screen is shown again when the dialog is opened a second time (with new content to be loaded),
set the `onclose-reset=":content"` attribute. Whenever the dialog is closed, it's original content will be placed back.

~~~html
<div class="modal" onclose-reset=":content">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                Please wait...
            </div>
        </div>
    </div>
</div>
~~~

### Classes

#### Class `auto-show`

If set on a Bootstrap modal, will automatically show the modal on document load.

If the element has a `auto-show-delay` attribute, the value (assumed in seconds) of that attribute is used as a delay to postpone automatically showing the dialog.

#### Class `backdrop-off`

When shown, this modal will have no backdrop.

#### Class `backdrop-static` or `static`

When shown, this modal will have static backdrop.


---

## Delayed behavior

### Delayed showing/hiding

When a document is loaded, parts can be made visible, hidden or loaded dynamically as soon as the document is loaded.

Elements marked with the classes `hidden` and `showafterload` will have the class `hidden` removed after load.

Elements marked with the class `hideafterload` will have the class `hidden` added after load.

** *Use CSS styling or Bootstrap framework to ensure the `hidden` class hides the element.*

### Delayed loading

When loading, elements having an `autoload-url` attribute will have the content replaced by the content of the given url.

If in addition, a `autoload-refresh` attribute is set with a timespan in seconds, the content will be refreshed every so many seconds.

Id the url contains the literal `{rnd}`, this literal will be replaced by a random value to bypass caches.

~~~html
<div autoload-url="/LatestNews/?x={rnd}" autoload-refresh="10">
  <i>Loading latest news. Please wait...</i>
</div>
~~~

*Delayed loading parts that are slow can help you increase perceived performance as users start to get response sooner.*

---

## Event Actions

Event Actions offer default behaviors easily accessible through an intuitive and declarative syntax.

There are two types of event actions: _onevent_-actions and _ifstate_-actions. Both are triggered
by the named event/state and perform the given action. The difference is that _ifstate_-actions are also
evaluated when the page (or page part) is loaded.

### Click events

#### `on[dbl]click-clear="css-selector"`

Clears the inner HTML of the matching elements.

#### `on[dbl]click-show="css-selector"`

Shows the matching elements (by removing the 'hidden' class).

#### `on[dbl]click-hide="css-selector"`

Hides the matching elements (by adding the 'hidden' class).

#### `on[dbl]click-toglleclass="classname [on target]"`

Toggle's the given class on the current element, or on the given target.

I.e: toggles the `active` class when this button is clicked:
~~~html
<button onclick-toggleclass="active"> Bold </button>
~~~

I.e: toggles the `hidden` class on the element(s) with class `details` when clicked:
~~~html
<button onclick-toggleclass="hidden on .details"> Details </button>
~~~

### Hovering events

#### `onhover-display="css-selector"`

Shows the matching elements (by removing the 'hidden' class) on entering, hides them again (by adding the 'hidden' class) on leaving.

#### `onhover-setclass="classname [on target]"`

Adds the given class to the current element or on the given target on entering, removes it again on leaving.

I.e: sets the `pink-bordered` class on the current element when hovered:
~~~html
<div onhover-setclass="pink-bordered">
</div>
~~~

I.e: sets the `pink-bordered` class on elements with the `btn` class when hovered:
~~~html
<div onhover-setclass="pink-bordered on .btn">
</div>
~~~

### Change events

#### `onchange-action="action-url"`

On change, calls the action-url.

If you define `method` on the element, with a value of "POST", a post request will be made. By default a GET request is made.

By default, the element itself is inline target of the call. You can override this by specifying an explicit `inline-target` attribute on the element.

If the server responds to the request with "202", the response is considered a mere acknowledgment, and the UI is not updated.

Example:

~~~html
<div onchange-action="/SetCountry" method="GET">
  <label><input type="radio" name="code" value="BE"/> Belgium</label>
  <label><input type="radio" name="code" value="FR"/> France</label>
  <label><input type="radio" name="code" value="ES"/> Spain</label>
</div>
~~~

The selected value is passed both as "name=value" as well as "name=name&value=value", so clicking on the third radio
button will issue a call to "<u>/SetCountry?code=ES&name=code&value=ES</u>".

For checkboxes, both "name=value" is passed, where value is the value of the checked checkbox and empty for unchecked checkboxes.
In addition, "name=name&value=value&checked=true|false" is sent, with as value, the value of the checkbox, checked or not.

So for following checkbox:

~~~html
<label><input type="checkbox" name="delivery" value="quick" onchange-action="/SetOption" method="GET"/> Quick delivery</label>
~~~

If the checkbox is checked, the following call is made: "<u>/SetOption?delivery=quick&name=delivery&value=quick&checked=true</u>".

If the checkbox is unchecked, the following call is made: "<u>/SetOption?delivery=&name=delivery&value=quick&checked=false</u>".

If the server returns an error, the value is reverted. (Currently only for checkboxes.)

### On FORM elements

#### `onchange-set="inputname"`

When any form gets a 'change' or 'input' event, sets the value of the INPUT element with the given name to 'true', or if it is a checkbox, check it.

The element would typically be a hidden input field used to maintain a dirty status.

Setting this event handler also adds the "form-changed" class to the form.

(To set only the "form-changed" class to the form, enter a non-existing name, i.e: "None".)

#### `onchange-submit=":form"`

When any form input is changed, the form is automatically submitted.

#### `onsubmit-disable=":submit"`

Disables normal form submission elements as inputs of type submit and image, and buttons of type submit, within the scope of the current form.

#### `onsubmit-show="css-selector"`

Makes the elements matching the given selector visible.

When the selector has matches within the current form, only those local matches will be impacted.
Otherwise all matches (outside the form element) will be impacted.

*Note that making the elements visible is done by removing the 'hidden' class from the matching elements.*

#### `onsubmit-hide="css-selector"`

Hides the elements matching the given selector.

When the selector has matches within the current form, only those local matches will be impacted.
Otherwise all matches (outside the form element) will be impacted.

*Note that hiding the elements is done by adding the 'hidden' class to the matching elements.*

#### `onsubmit-disable=":submit"`

The `onsubmit-disable=":submit"` attribute on form elements will cause all buttons and input elements of type submit,
reset or image to be disabled when the form is being submitted.

*(In future implementations, it may be possible to give a CSS selector as value to explicitely indicate which
elements to disable.)*

### On form input elements

#### `onchange-submit=":form"`

When this element is changed, the surrounding form is automatically submitted.

If the element has an inline-target and/or a formaction, these will be used instead of the default values of the form.

*Note that text input elements only raise the change event when their content has changed and they have lost the focus.*

#### `ifchecked-show="css-selector"`

If this checkbox or radio input is checked, the selector matches are shown.

If this checkbox or radio input is unchecked, the selector matches are hidden.

*Note that showing/hiding the elements is done by removing/adding the 'hidden' class to the matching elements.*

#### `ifchecked-hide="css-selector"`

Inverse of `ifchecked-show`.

#### `oncheck-enable="css-selector"`

When unchecked, the selector matches are disabled.

When checked, the action is revered.

#### `oncheck-cancheck="css-selector"`

When unchecked, the selector matches are also unchecked and disabled.

When checked, the action is revered.

---

## Classes and Ids

### Visibility

#### Class `hidden`

Marks elements as to be hidden/invisible.

*Note: what's the relation with the Bootstrap4 `d-none` class ?*

Both have different semantics. The hidden class used here is related to behavior of the element and most probably means the element is to be hidden for functional reasons, i.e. the user has not checked the "Advanced" checkbox and should therefore not see the advanced settings.

In Bootstrap 4, the d-none class is meant to hide elements for (responsive) design reasons. I.e. `class="d-none d-lg-block"` will hide the element on small devices only.

Both classes should co-exists. And elements should only be visible if they should be so for both functional and design reasons.

### Loading

#### Class `load-in-progress`

Whenever the library issues an (ajax) call to load a page (part), it sets the `load-in-progress` class on the document body.

When the call is terminated, it removes the `load-in-progress` class.

#### Class `load-in-progress-show`

Elements with this class are shown while an (ajax) call is in progress.

#### Class `load-in-progress-hide`

Elements with this class are hidden while an (ajax) call is in progress.

### Context menus (draft)

#### Class `contextmenu`

Defines the context menu for the parent element or elements specified with `contextmenu-for="css-selector"`.

I.e: by adding this contextmenu, richt-clicking on the parent of this element will offer an Edit / Delete context menu:
~~~html
<div class="contextmenu">
  <div class="nav flex-column nav-pills" role="tablist">
    <a class="nav-link" onhover-setclass="active" href="javascript:alert('Edit');">Edit</a>
    <a class="nav-link" onhover-setclass="active" href="javascript:alert('Delete');">Delete</a>
  </div>
</div>
~~~


(see: https://micropyramid.com/blog/jquery-mouse-events-and-touch-events/)

---
https://en.support.wordpress.com/markdown-quick-reference/
