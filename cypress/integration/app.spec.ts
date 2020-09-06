import { About, Home } from '../pages'

describe('Your app', function () {
  it('should load the Home page', function () {
    Home.visit()
  })
  it('should load the About page', function () {
    About.visit()
  })
})
