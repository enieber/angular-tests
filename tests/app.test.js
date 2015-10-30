 var expect = chai.expect

describe('Todo Controller', function(){
    
    beforeEach(angular.mock.module('app'))

    beforeEach(inject(function($rootScope, $controller){
    
	scope = $rootScope.$new()

	controller = controller('TodoController', {$scope: scope})
    }))

    describe('Add todos', function(){
	it('Should be add add todo on list', function(){
	
	var leng = scope.todos.length
	scope.addTodo('Comprar Um livro ', false)
	var newLeng = scope.todos.length
	expect(leng).to.equal(equal(newLeng -1))
	})	
    })
})
