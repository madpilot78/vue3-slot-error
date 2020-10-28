import '@testing-library/jest-dom'
import { render } from '@testing-library/vue'
import Component from '@/Component.vue'

test('Component renders', () => {
  const { getByText } = render(Component, {
    slots: {
      default: '<p>Content slot test</p>'
    }
  })

  expect(getByText('Some title')).toBeInTheDocument()
  expect(getByText('Content slot test')).toBeInTheDocument()
})
