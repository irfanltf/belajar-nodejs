function samplePromise(){
    return Promise.resolve("Irfan");
}

async function run(){

    const name = await samplePromise();
    console.info(name);
}

run();