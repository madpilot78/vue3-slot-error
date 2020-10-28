# Testcase for error with vue3 slots

I'm using the vue3 branch of vue test utils. That repo iss not providing a compiled module. Please follow this steps to run this test:


```sh
yarn install
( cd node_modules/@testing-library/vue/ ; yarn install ; yarn build )
yarn test
```

The error I'm getting I can't make sense of is:

```
[Vue warn]: Invalid VNode type: Symbol(Fragment) (symbol) 
  at <Anonymous ref="VTU_COMPONENT" > 
  at <VTUROOT>
```

Please note that the component rendered, but the slot content did not.
