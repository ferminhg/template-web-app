import { render, screen } from '@testing-library/react'
import Home from '../../../pages'

describe('Home', () => {
    it('renders a heading', () => {
        const { container } = render(<Home />)
        const heading = screen.getByRole('heading', {
            name: /Web-app Template/i,
        })

        expect(heading).toBeInTheDocument()
    })
})