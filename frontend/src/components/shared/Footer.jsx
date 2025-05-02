import React from 'react'

const Footer = () => {
  return (
      <footer className='border-t border-gray-200 py-8'>
        <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-5 md:mb-0'>
                    <h2 className='text-xl font-bold'>Job hunt</h2>
                    <p className='text-sm'>2025 Your Company. All rights reserved</p>
                </div>
                <div className='flex space-x-4 mt-4 md:mt-0'>
                    <a href="https://facebook.com" className='hover:text-gray-400' aria-label='Facebook'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.919.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z'></path></svg>
                    </a>
                    <a href="https://twitter.com" className='hover:text-gray-400' aria-label='Twitter'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M23.643 4.937c-.835.371-1.732.62-2.675.732a4.688 4.688 0 002.063-2.573c-.906.537-1.908.925-2.975 1.136a4.674 4.674 0 00-7.95 4.26A13.281 13.281 0 011.671 3.149a4.66 4.66 0 001.45 6.227c-.807-.025-1.566-.247-2.228-.616v.062c0 2.25 1.604 4.126 3.733 4.558a4.694 4.694 0 01-2.224.084c-.617-.017-1.217-.193-1.734-.48v0c1 .31 2 .48 3 .48a9.353 9.353 0 01-5.78 1.99c-.375-.023-.743-.022-1 .002a13.188 13.188 0 007.157 2h8c8 .001 12-6 .001-12z'></path></svg>
                    </a>
                    <a href="https://instagram.com" className='hover:text-gray-400' aria-label='Instagram'> 
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'><path d='M12 2.163c3.207 0 3.58.012 4.85.07 1.27.059 2.42.26 3.29.54a6.57 6.57 0 012.29 1.49c.5.5.9 1 .99 1.49a7.4 7.4 0 01.54 3.29c.058 1.27.07 1.64.07 4.85s-.012 3.58-.07 4.85c-.059 1.27-.26 2.42-.54 3.29a6.57 6.57 0 01-1.49 2.29c-.5.5-1 .9-1.49 .99a7.4 7.4 0 01-3 .54c-1 .058-1 .07-4 .07s-3-.012-4-.07a7.4 7.4 0 01-3-.54c-.49-.09-.99-.49-1.49-.99a6.57 6.57 0 01-1 .49c-.87 .28-2 .48-3 .54C2 .0122 .0122 .0122 .0122 .0122S2 .0122z'></path></svg>
                    </a>
                </div>
            </div>
        </div>
      </footer>

  )
}

export default Footer
