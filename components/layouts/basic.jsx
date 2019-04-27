import React from 'react'

const Basic = (props) => {
  return (
    <div className='wrapper'>
      <header>
        {props.children[0]}
      </header>
      <main>
        <article>
          {props.children[1]}
        </article>
        <aside>
          {props.children[2]}
        </aside>
      </main>
      <footer>
        {props.children[3]}
        <p>Copyright &copy; 2019</p>
      </footer>
    </div>
  )
}

Basic.sections = ['header', 'main', 'sidebar', 'footer']

export default Basic