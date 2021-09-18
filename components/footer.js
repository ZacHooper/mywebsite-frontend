import Container from './container'
import { EXAMPLE_PATH } from '@/lib/constants'
import SocialIcon from './social-icon'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t-2 border-light-white">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          
          <h3 className="text-light-white hover:text-success text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <a href="mailto:zac.g.hooper@gmail.com" target="_blank">Insert cliche "Let's Chat" here.</a>
          </h3>
          
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <SocialIcon icon={["fab","github"]} url="https://github.com/ZacHooper" />
            <SocialIcon icon={["fab","linkedin"]} url="https://www.linkedin.com/in/zac-hooper-85960411a/" />
            <SocialIcon icon={["fab","twitter"]} url="https://twitter.com/Hoo0oper" />
            <SocialIcon icon="envelope" url="mailto:zac.g.hooper@gmail.com" />
          </div>
        </div>
      </Container>
    </footer>
  )
}
