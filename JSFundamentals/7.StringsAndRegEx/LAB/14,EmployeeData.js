/**
 * Created by Kondoff on 06-Oct-16.
 */
function emData(input) {
    let pattern = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    let match;
    for (let element of input) {
        if (match = pattern.exec(element)) {
            console.log(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]} `);
        }
    }
}