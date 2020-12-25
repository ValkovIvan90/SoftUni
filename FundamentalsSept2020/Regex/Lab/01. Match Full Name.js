function solve([text]) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = [];

    while (validName = pattern.exec(text)) {
        result.push(validName[0]);
    }
    console.log(result.join(' '));
    
}
solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
]
)