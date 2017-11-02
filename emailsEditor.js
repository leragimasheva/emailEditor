function EmailsEditorController($scope) {
  var ctrl = this;
  
  $scope.removeEmail = function(index) {
    ctrl.emails.splice(index, 1);
  };
  
  $scope.fixInputWidth = function(event) {
    var element = event.target;
    if (element.value.length > 1) {
       element.style.width = ((element.value.length + 3) * 8) + 'px';
    } else {
       element.style.width = '112px';
    }
  };
  
  function addEmail(element) {
    if (element.value) {
       ctrl.emails.push(element.value);
       element.value = "";
       element.style.width = '112px';
    }
  }
  
  $scope.blur = function(event) {
     addEmail(event.target);
  };
  
  $scope.keypress = function(event) {
     if (event.which == 13 || event.which == 44) {
        event.preventDefault();
        addEmail(event.target);
    }
  };
  
  $scope.paste = function(event) {
    event.preventDefault();
    var data = event.clipboardData.getData('text/plain');
    var emails = data.split(/[\n,]/g);
    emails.forEach(function(email) {
      ctrl.emails.push(email);
    })
  };
  
  $scope.validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}

angular.module('emailsEditor').component('emailsEditor', {
  templateUrl: 'emailsEditor.html',
  controller: EmailsEditorController,
  bindings: {
    emails: '='
  }
});