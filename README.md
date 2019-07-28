Sircl
=====

## Introduction

Sircl is a Javascript(/CSS) library to support server-side rendering.

The library facilitates developing web applications with server-side rendering as with ASP.NET MVC, Java Servlets and JSP, PHP, etc, by eliminating most needs for client-side scripting while offering a fluent, rich, almost "single-page" experience to endusers.

## Installation

### By copying files

Download the files in the "dist" subdirectory of the version you want, and reference your copies from within your web pages.

The download includes following files:

- README.md
- sircl.css (min, full)
- sircl.js (min, full)
- sircl-bootstrap4.js (min)
- sircl-eventactions.js (min, full)
- sircl-fa.js (min)
- sircl-legacy.css (min)
- sircl-legacy.js (min)
- sircl-unicons.js (min, full)

Above files followed by 'min' between brackets, also exist in minified version.

Above files followed by 'full' between brackets, are part of the bundled "full" files:

- sircl-full.min.css
- sircl-full.min.js

So if you want to use all of Sircl (except legacy items) in combination with Bootstrap 4 and Font Awesome, you should include following references:

~~~html
<link href="/lib/sircl-1.0/sircl-full.min.css" rel="stylesheet" />
<script src="/lib/sircl-1.0/sircl-full.min.js"></script>
<script src="/lib/sircl-1.0/sircl-bootstrap4.min.js"></script>
<script src="/lib/sircl-1.0/sircl-fa.min.js"></script>
~~~


### About versioning

I have choosen not to include the version number in the filename as is often done, but strongly encourage you to use a version number in the directory name, as is done in the dist directory.


## Documentation

For now, the [reference documentation](doc/sircl-ref.md) is your best information source.

A [recipe documentation](doc/sircl-recip.md) is in working progress.


