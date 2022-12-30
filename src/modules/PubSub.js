class PubSub {
    events = {};

    publish(event, data) {
        console.log(`publish called for event ${event} with data ${JSON.stringify(data)}`)
        if (!this.events[event]) {
            return;
        }

        for (let listener of this.events[event]) {
            console.log(`calling ${listener} for ${event}`)
            listener(data);
        }
    }

    subscribe(event, callback) {
        console.log(`subscribe: ${event}, ${callback}`)
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(callback);
        console.log(`${callback} subscribed to ${event}`)
    }

    unsubscribe(event, callback) {
        if (!this.events[event]) {
            return;
        }

        this.events[event].remove(
            this.events[event].find(listener => listener === callback)
        );
    }
}

export default new PubSub();