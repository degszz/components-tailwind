---
image: "/miro.jpg"
title: "Theme Toggle"
text: "This is a theme toggle."
code: "export default"
---
<button class='m-1 p-3 w-fit bg-black-50 hover:bg-black-100 
    dark:hover:bg-black-700 dark:bg-black-950  dark:text-white'
    onClick={handleChangeTheme}>
    <div>
        <img class="w-6 h-6 dark:hidden " src={image-light} />
        <img class=" w-6 h-6 hidden dark:block" src={image-dark} />
    </div>
</button>

<script>
    import { useEffect, useState } from "react";
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
</script>