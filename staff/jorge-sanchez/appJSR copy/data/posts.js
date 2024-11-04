var posts = []

posts.push({
    id: 'm2w92r8h13',
    author: 'm2w92r8h09',
    image: 'https://d2w66jai70z7l8.cloudfront.net/media/2024/02/peter-pan.png',
    text: 'here me',
    date: new Date().toSISOString()
})

posts.push({
    id: 'm2w92r8h44',
    author: 'm2w92r8h44',
    iamge: 'https://imgs.search.brave.com/k_2RDbqPrz82Nmj-o_4Ry6R1uVcsqlJ5tT7ckqEtTEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Rv/bWluaW9zLWVuY2Fu/dGFkb3MvaW1hZ2Vz/L2MvY2QvV0lLSV9X/RU5EWV9EQVJMSU5H/LTAuanBnL3Jldmlz/aW9uL2xhdGVzdC9z/Y2FsZS10by13aWR0/aC1kb3duLzQ1Mz9j/Yj0yMDE1MTAyMDE2/NDgyNiZwYXRoLXBy/ZWZpeD1lcw.jpeg',
    text: 'dream team',
    date: new Date().toSISOString()
})

localStorage.posts = JSON.stringify(posts)