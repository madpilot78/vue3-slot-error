# Testcase for error with vue3 slots

~~I'm using the vue3 branch of vue test utils. That repo is not providing a compiled module.~~
Version 6.0.0 of vue-testing-library has been released with vue3 support.

Please follow these steps to run this test:

```sh
yarn install
yarn test
```

(No need to manually rebuild @testing-library/vue now that it's released and providing compiled assets)

It looks like the problem was in the testing library, since the test now passes.


The error I was getting I couldn't make sense of was:

```
[Vue warn]: Invalid VNode type: Symbol(Fragment) (symbol) 
  at <Anonymous ref="VTU_COMPONENT" > 
  at <VTUROOT>
```

The component was rendered, but the slot content was not.
