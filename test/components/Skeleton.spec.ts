import { describe, it, expect } from 'vitest'
import Skeleton, { type SkeletonProps } from '../../src/runtime/components/Skeleton.vue'
import ComponentRender from '../component-render'

describe('Skeleton', () => {
  it.each([
    ['basic case', {}],
    ['with as', { props: { as: 'span' } }],
    ['with class', { props: { class: 'rounded-full size-12' } }]
  ])('renders %s correctly', async (nameOrHtml: string, options: { props?: SkeletonProps, slots?: any }) => {
    const html = await ComponentRender(nameOrHtml, options, Skeleton)
    expect(html).toMatchSnapshot()
  })
})
