{{#select-box value=attrs.value on-select=attrs.on-select class-prefix='my-select-box' as |sb|}}}
  {{sb.selected-option label=sb.value.name}}
  <button onclick={{action sb.toggle}}>Toggle</button>
  {{yield sb}}
{{/select-box}}
