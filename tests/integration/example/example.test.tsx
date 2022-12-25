import { render, screen } from '@testing-library/react'
import Example from '../../../pages/example'

describe('Example', () => {
    it('renders a heading', () => {
        const { container } = render(<Example />)
        const heading = screen.getByRole('heading', {
            name: /Web-app Template/i,
        })

        expect(heading).toBeInTheDocument()
    })
})