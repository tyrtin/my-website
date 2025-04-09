<button type="button">I'm a cool circle button</button>

<style>
    button {
        /* Base styles */
        display: block;
        width: 4rem;
        height: 4rem;
        border: none;
        cursor: pointer;

        /* Hide button caption text */
        overflow: hidden;
        color: transparent;

        /* The fill animation */
        background-image: url('kort1.jpg');
        transition: background-color 0.2s;

        /* Store the SVG in a variable so it's easy to use */
        --svg: url('data:image/svg+xml,\<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><polygon fill="white" points="0,100 100,0 100,100"/></svg>');

        /* Chrome, still requires prefix in 2022 */
        -webkit-mask: var(--svg);

        /* Firefox and Safari */
        mask: var(--svg);
    }

    button:hover,
    button:focus {
        background-color: Turquoise;
    }

    button:active {
        background-color: Gold;
    }
</style>