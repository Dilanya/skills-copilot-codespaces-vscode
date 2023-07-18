function skillsMember() {
    return {
      restrict: 'EA',
      templateUrl: '/modules/skills/client/views/member.html',
      controller: 'SkillsMemberController',
      controllerAs: 'vm',
      scope: {
        member: '=',
        skills: '='
      },
      bindToController: true
    };
  }