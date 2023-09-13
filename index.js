// Define the shout function
function shout(string) {
    return string.toUpperCase();
  }
  
  // Jasmine test suite
  describe('shout(string)', function() {
    it('receives one argument and returns it in all caps', function() {
      expect(shout('hello')).toEqual('HELLO');
    });
  });
  // Define the whisper function
function whisper(string) {
    return string.toLowerCase();
  }
  
  // Jasmine test suite
  describe('whisper(string)', function() {
    it('receives one argument and returns it in all lowercase', function() {
      expect(whisper('HELLO')).toEqual('hello');
    });
  });
  // Define the logShout function
function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Jasmine test suite
  describe('logShout(string)', function() {
    it('takes a string argument and logs it in all caps using console.log()', function() {
      // Create a spy to monitor console.log
      const spy = spyOn(console, 'log').and.callThrough();
  
      // Call the logShout function
      logShout('hello');
  
      // Expect that console.log was called with 'HELLO'
      expect(spy).toHaveBeenCalledWith('HELLO');
  
      // Restore the original console.log function
      spy.and.restore();
    });
  });
  // Define the logWhisper function
function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Jasmine test suite
  describe('logWhisper(string)', function() {
    it('takes a string argument and logs it in all lowercase using console.log()', function() {
      // Create a spy to monitor console.log
      const spy = spyOn(console, 'log').and.callThrough();
  
      // Call the logWhisper function
      logWhisper('HELLO');
  
      // Expect that console.log was called with 'hello'
      expect(spy).toHaveBeenCalledWith('hello');
  
      // Restore the original console.log function
      spy.and.restore();
    });
  });
  // Define the sayHiToHeadphonedRoommate function
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  // Jasmine test suite
  describe('sayHiToHeadphonedRoommate(string)', function() {
    it('returns "I can\'t hear you!" if `string` is lowercase', function() {
      expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
    });
  
    it('returns "YES INDEED!" if `string` is uppercase', function() {
      expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
    });
  
    it('returns "I would love to!" if `string` is "Let\'s have dinner together!"', function() {
      expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
        "I would love to!"
      );
    });
  });
  