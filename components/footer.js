import Container from './container'
import { FormattedMessage } from 'react-intl'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container className="bg-secondary">
        
      </Container>
      <div className="bg-primary py-4 text-primary">
                <div className="container mx-auto px-4">
                  <div className="-mx-4 flex flex-wrap justify-between">
                    <div className="px-4 w-full text-center sm:w-auto sm:text-left text-sm">
                      Copyright &copy; {new Date().getFullYear() + " "}
                      Ruben Casas. <FormattedMessage id="footerCopyright" />
                    </div>
                  </div>
                </div>
              </div>
    </footer>
  )
}
