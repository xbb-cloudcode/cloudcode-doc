export function example() {
  sdk.getSubformValue({
    formId: 'subForm_1',
    row: 0,
    fieldId: 'text_1',
  }).then(res => {
    console.log('res:', res);
  })
}
