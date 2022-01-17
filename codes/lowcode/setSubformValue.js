export function example () {
  sdk.setSubformValue({
    formId: 'subForm_1',
    row: 0,
    fieldId: 'num_1',
    value: 0.0337999
  }).then(res => {
    console.log('res:', res);
  })
}
