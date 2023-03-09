function stars(func1){
    let massive = ["Star1", "Star2", "Star3", "Star4", "Star5"]
    for(let i = 0; i < massive.length; i++){
        let a = massive[i]
        let id = document.getElementById(a)
        if(i<func1){
            id.src = "kitchen_photo/star_1.png"
        }
        else{
            id.src = "kitchen_photo/star_2.png"
        }
    }
}