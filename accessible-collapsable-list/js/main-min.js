"use strict";window.sw=window.sw||{},window.sw.a11y=window.sw.a11y||{},window.sw.a11y.CollapsableList={_toggleButtonEl:null,_itemsListEl:null,_keyCodes:{ENTER:13,ESC:27,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40},init:function c(a,b){this._toggleButtonEl=a,this._itemsListEl=b,this.setToggleButtonLabel(),this.focusOnActiveDescendant(),this.setupListeners()},getSelectedOption:function d(){var a=this._itemsListEl,b=a.getAttribute("aria-activedescendant"),c=a.querySelector("#"+b);return{id:c.id,value:c.innerHTML}},setToggleButtonLabel:function c(){var a=this._itemsListEl,b=a.querySelectorAll("li[role=\"option\"]");this._toggleButtonEl.innerHTML=b[0].innerHTML},focusOnActiveDescendant:function d(){var a=this._itemsListEl,b=a.getAttribute("aria-activedescendant"),c=a.querySelector("#"+b);c.classList.add("focused")},updateSelectedEl:function e(a,b){if(a&&b){var c=this._itemsListEl,d=this._toggleButtonEl;a.classList.remove("focused"),a.removeAttribute("aria-selected"),b.classList.add("focused"),b.setAttribute("aria-selected",!0),c.setAttribute("aria-activedescendant",b.id),d.innerHTML=b.innerHTML}},setupListeners:function d(){var a=this,b=this._toggleButtonEl,c=this._itemsListEl;b.addEventListener("click",function(){var a=b.getAttribute("aria-expanded");a&&"false"!==a?(b.setAttribute("aria-expanded",!1),c.classList.add("hide"),c.removeAttribute("tabindex")):(b.setAttribute("aria-expanded",!0),c.classList.remove("hide"),c.setAttribute("tabindex",-1),c.focus())}),c.addEventListener("keydown",function(d){var e=d.keyCode,f=c.getAttribute("aria-activedescendant"),g=c.querySelector("#"+f);if(e===a._keyCodes.LEFT_ARROW||e===a._keyCodes.UP_ARROW){d.preventDefault();var h=g.previousElementSibling;a.updateSelectedEl(g,h)}else if(e===a._keyCodes.RIGHT_ARROW||e===a._keyCodes.DOWN_ARROW){d.preventDefault();var i=g.nextElementSibling;a.updateSelectedEl(g,i)}else(e===a._keyCodes.ENTER||e===a._keyCodes.ESC)&&(d.preventDefault(),b.setAttribute("aria-expanded",!1),c.classList.add("hide"),c.removeAttribute("tabindex"),b.focus())})}};var toggleButton=document.querySelector(".toggle-button"),itemsList=document.querySelector(".items-list");window.sw.a11y.CollapsableList.init(toggleButton,itemsList);