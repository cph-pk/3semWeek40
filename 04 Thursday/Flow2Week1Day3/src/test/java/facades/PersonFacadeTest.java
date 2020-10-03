package facades;

import dto.PersonDTO;
import dto.PersonsDTO;
import entities.Person;
import exceptions.PersonNotFoundException;
import utils.EMF_Creator;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

//Uncomment the line below, to temporarily disable this test
//@Disabled
public class PersonFacadeTest {

    private static EntityManagerFactory emf;
    private static PersonFacade facade;
    private static Person p1, p2, p3;

    public PersonFacadeTest() {
    }

    @BeforeAll
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactoryForTest();
        facade = PersonFacade.getPersonFacde(emf);
    }

    @AfterAll
    public static void tearDownClass() {
//        Clean up database after test is done or use a persistence unit with drop-and-create to start up clean on every test
    }

    // Setup the DataBase in a known state BEFORE EACH TEST
    //TODO -- Make sure to change the script below to use YOUR OWN entity class
    @BeforeEach
    public void setUp() {

        EntityManager em = emf.createEntityManager();
        p1 = new Person("Kurt", "Wonnegut", "1234");
        p2 = new Person("Jønke", "bbb", "6666");
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Person.deleteAllRows").executeUpdate();
            em.persist(p1);
            em.persist(p2);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    @AfterEach
    public void tearDown() {
//        Remove any data after each test was run
    }

    // TODO: Delete or change this method 
    @Test
    public void testAFacadeMethod() {
        assertEquals(2, facade.getPersonFacadeCount(), "Expects two rows in the database");
    }

    @Test
    public void testGetPersonFacadeCount() {
        assertEquals(2, facade.getPersonFacadeCount(), "Expects two persons in the database");
    }

//    @Test
//    public void testGetAllPersons() {
//        PersonsDTO p = facade.getAllPersons();
//        assertThat(p, hasSize(2));
//    }
    @Test
    public void testGetAllPersons() {
        PersonsDTO personsDTO = facade.getAllPersons();
        assertEquals(facade.getAllPersons(), personsDTO);
        //assertEquals(facade.getAllPersons().equals(personsDTO), personsDTO.equals(personsDTO));
    }

    @Test
    public void testGetPersonById() throws PersonNotFoundException {
        int expected = Math.toIntExact(p2.getId());
        PersonDTO personDTO = facade.getPerson(p2.getId());
        assertEquals(expected, personDTO.getId());
    }

//    @Test
//    public void testAddPerson() {
//        
//        Person person = new Person("pop", "corn", "1234");
//        assertThat(person, hasToString("firstName=pop, lastName=corn, phone=1234"));
//        
//    }
    
    @Test
    public void testAddPerson() {
        Person person = new Person("pop", "corn", "1234");
        assertThat(person.getFirstName(), equalTo("pop"));
    }
    
}
