# Human readable ids action

This action prints human readable ids using a great library [https://www.npmjs.com/package/human-readable-ids](human-readable-ids).
It allows you to use this randomly generated version to e.g. tag your git branch or docker image with something more readable.

## Inputs

No imputs required

## Outputs

### `generated-id`

Generated human readable id

## Example usage

```yml
steps:
  - uses: actions/human-readable-id-action@v1.0
    id: human-readable
  - name: Print out the id
    run: echo '${{ steps.date.human-readable.generated-id }}'
```