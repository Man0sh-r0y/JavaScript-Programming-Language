
// break statement
for (let i = 1; i <= 10; i = i + 1) {

    if (i == 5) {
        break; // terminates the loop
    }

    console.log(i);
}

// continue statement
for (let i = 1; i <= 10; i = i + 1) {

     if (i == 5) { // ignore this iteration when i==5
        continue;
    }

    console.log(i);
}