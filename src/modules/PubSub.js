class PubSub {
    events = {};

    publish(event, data) {
        if (!this.events[event]) {
            return;
        }

        for (let listener of this.events[event]) {
            listener(data);
        }
    }

    subscribe(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(callback);
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