module.exports = (io)=> {
   
    const sokectioSubscriber = {};

    sokectioSubscriber.emit = (data)=>{
        io.subscriber.emit(data)
        return null;
    }
    return sokectioSubscriber;
  }