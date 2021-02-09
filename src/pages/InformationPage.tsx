import React from 'react'
import { useHistory } from 'react-router-dom'

export const InformationPage: React.FC = () => {
    let history = useHistory();
    return (
        <>
            <h1>Страница информации</h1>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloremque quaerat? Illum perspiciatis earum quam quis sapiente ab distinctio sequi est nam. Explicabo quasi eius facere, atque autem soluta tempora!
                Aspernatur, culpa suscipit! Illo adipisci commodi dolorum nesciunt, dolores vel rerum magni earum sunt aliquam deleniti. Aliquam cum eum ullam atque itaque. Doloribus quam ducimus deserunt at sequi voluptatem esse.
                Ut magnam, molestias veritatis reprehenderit exercitationem vitae fugiat nam asperiores quasi iste iusto fuga cumque dolorum id aut autem aliquid. Repellendus maxime quia earum quae accusantium eos, voluptatibus odio! Molestias?
                Sint incidunt, consequuntur eius temporibus sed hic nemo minima quod accusamus quos odit eaque eum molestiae possimus accusantium reprehenderit dolore debitis numquam facilis quidem repudiandae ratione doloribus? Quis, fuga. Voluptates.
                Possimus qui amet, eaque laboriosam architecto quo repudiandae repellendus magni delectus, voluptatibus velit. Ratione ipsam, nisi aspernatur aliquam ex omnis commodi necessitatibus pariatur laborum accusantium laudantium obcaecati nesciunt labore eveniet!
                Laudantium nihil, sunt ab rerum sequi saepe molestiae incidunt nisi voluptatem corrupti inventore! A, molestias quas perspiciatis odio id consectetur quisquam et iusto exercitationem, sunt harum rem. Velit, facere ea.
                Illo quam distinctio earum inventore hic similique atque sed laboriosam magni soluta officia temporibus iure veritatis eaque deserunt minus quisquam, error ad dolorem. Autem tempore hic ipsa in, accusantium eum.
                Reiciendis vel cumque pariatur cupiditate neque eum a eligendi illum id minima possimus aspernatur ipsum iure sint corrupti ratione aut, temporibus nulla laboriosam aliquid soluta vitae minus architecto hic? Eligendi?
                Dicta non culpa, numquam consequuntur consectetur corporis fugit dolore dignissimos quia, soluta iure et nisi aspernatur? Praesentium dolorem porro libero molestias aut atque eum est animi tenetur! Iure, rem nam?
                Itaque a omnis incidunt eaque placeat laudantium fugiat sint vel, iure repellendus inventore, cum officiis quaerat? Incidunt qui minus modi, dolorum repudiandae numquam hic dicta optio accusantium accusamus deserunt doloremque.</p>
            </div>
            <button onClick={() => history.push('/')} className="btn">
                Обратно к списку дел 
            </button>
        </>
    )
}
