import '@/styles/components/dock.scss'
const displayOptions = [
  { displayName: 'Projects', link: '/projects' },
  { displayName: 'Github', link: 'https://github.com/koribot' },
  { displayName: 'Socials', link: '/socials' },
  { displayName: 'About Me', link: '/about-me' }
];


const Dock = () => {
  return (
    <div className="d-flex width-full p-fixed bottom-0 justify-center" style={{ zIndex: '9999999999999' }}>
      <div className="dock-bg d-flex fd-row width-half margin-sm padding-sm border-radius-smooth">

        <ul className='d-flex justify-end align-center gap-50px style-none '>
          {displayOptions.map((option, index) => (
            <a key={index} className='docker-option cursor-pointer style-none text-white' target={option.displayName === 'Github' ? '_blank' : ''} href={`${option.link}`}>
              {option.displayName}

            </a>
          ))}
        </ul>


      </div>
    </div>
  )
}

export default Dock