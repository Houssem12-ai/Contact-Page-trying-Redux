import React from 'react'


const Rainbow = (Wrappedcomponent ) => {
    const colour = ['red', 'pink', 'bleu', 'green', 'yellow'];
    const randomcolour = colour[Math.floor(Math.random() * 5)];
    const nin = randomcolour + '-text';
    return (props) => {
        return(/* why is it only changing on refresh ??? */
            <div className={nin}>
                <Wrappedcomponent {...props} />
            </div>
        )
    }

}
export default Rainbow 