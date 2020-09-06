import { About, Home } from '../pages'

describe('Your app', function () {
  it('Homepage successfully loads', function () {
    Home.visit()
  })
  it('About page successfully loads', function () {
    About.visit()
  })
})
