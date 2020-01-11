setTimeout(() => {
    new fullpage("#fullpage", {
        autoScrolling: true,
        licenseKey: null,
        navigation: true,
        onLeave: (origin, destination, direction) => {
            console.log("sos");
        }
    });
}, 200)