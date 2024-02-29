import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Binding {

		/** Unique identifier representing a container */
		ContainerId?: string | null;
	}
	export interface BindingFormProperties {

		/** Unique identifier representing a container */
		ContainerId: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			ContainerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Certificate {

		/**
		 * Certificate Authority (CA) certificate including the CA public key.
		 * Required
		 */
		ca_cert: string;

		/**
		 * Server certificate including the server's public key.
		 * Required
		 */
		server_cert: string;

		/**
		 * User certificate including the user's public key.
		 * Required
		 */
		user_cert: string;

		/**
		 * User's private key.
		 * Required
		 */
		user_key: string;
	}
	export interface CertificateFormProperties {

		/**
		 * Certificate Authority (CA) certificate including the CA public key.
		 * Required
		 */
		ca_cert: FormControl<string | null | undefined>,

		/**
		 * Server certificate including the server's public key.
		 * Required
		 */
		server_cert: FormControl<string | null | undefined>,

		/**
		 * User certificate including the user's public key.
		 * Required
		 */
		user_cert: FormControl<string | null | undefined>,

		/**
		 * User's private key.
		 * Required
		 */
		user_key: FormControl<string | null | undefined>,
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			ca_cert: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			server_cert: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_cert: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CertificateRefresh {

		/** Certificate Authority (CA) certificate including the CA public key. */
		ca_cert?: string | null;

		/** Full URL to the IBM Bluemix registry. */
		reg_host?: string | null;

		/** Server certificate including the server's public key. */
		server_cert?: string | null;

		/** User certificate including the user's public key. */
		user_cert?: string | null;

		/** User's private key. */
		user_key?: string | null;
	}
	export interface CertificateRefreshFormProperties {

		/** Certificate Authority (CA) certificate including the CA public key. */
		ca_cert: FormControl<string | null | undefined>,

		/** Full URL to the IBM Bluemix registry. */
		reg_host: FormControl<string | null | undefined>,

		/** Server certificate including the server's public key. */
		server_cert: FormControl<string | null | undefined>,

		/** User certificate including the user's public key. */
		user_cert: FormControl<string | null | undefined>,

		/** User's private key. */
		user_key: FormControl<string | null | undefined>,
	}
	export function CreateCertificateRefreshFormGroup() {
		return new FormGroup<CertificateRefreshFormProperties>({
			ca_cert: new FormControl<string | null | undefined>(undefined),
			reg_host: new FormControl<string | null | undefined>(undefined),
			server_cert: new FormControl<string | null | undefined>(undefined),
			user_cert: new FormControl<string | null | undefined>(undefined),
			user_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Container {

		/** The command and arguments that were passed to the container during container creation. This command is executed when the container is started. */
		Command?: string | null;

		/** The current status of the container. The status can either be a transient state, such as BUILDING, and NETWORKING or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, PAUSED, or SUSPENDED. */
		ContainerState?: string | null;

		/**
		 * The time when the container was created.
		 * Type: float
		 */
		Created?: number | null;

		/** A list of all the environment variables of the container. */
		Env?: Array<string>;
		Group?: Group;

		/** Unique identifier representing a container. */
		Id?: string | null;

		/** Full path to the container image in your private Bluemix registry. */
		Image?: string | null;

		/** Unique identifier representing a container image. */
		ImageId?: string | null;

		/** List of custom metadata that was added to the container. Labels serve a wide range of uses, such as adding notes to a container. Every label is a key/ value pair. */
		Labels?: string | null;

		/**
		 * The amount of container memory in Megabyte that was assigned to your container. The memory is counted towards the quota that is allocated for the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Memory?: number | null;

		/** The name of the container. */
		Name?: string | null;

		/** The name of the container. */
		Names?: Array<string>;
		NetworkSettings?: NetworkSetting;
		Ports?: Port;

		/**
		 * Total size of all the files in the container, in bytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SizeRootFs?: number | null;

		/**
		 * The size of the files which have been created or changed, if you compare the container to its base image. Just after creation, this should be zero. Ass you modify (or create) files, this size will increase.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SizeRw?: number | null;

		/**
		 * Time when the container was started.
		 * Type: float
		 */
		Started?: number | null;

		/** The current status of the container. The status can either be a transient state, such as BUILDING, and NETWORKING or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, PAUSED, or SUSPENDED */
		Status?: string | null;

		/**
		 * Number of virtual CPUs that are assigned to the container.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VCPU?: number | null;
	}
	export interface ContainerFormProperties {

		/** The command and arguments that were passed to the container during container creation. This command is executed when the container is started. */
		Command: FormControl<string | null | undefined>,

		/** The current status of the container. The status can either be a transient state, such as BUILDING, and NETWORKING or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, PAUSED, or SUSPENDED. */
		ContainerState: FormControl<string | null | undefined>,

		/**
		 * The time when the container was created.
		 * Type: float
		 */
		Created: FormControl<number | null | undefined>,

		/** Unique identifier representing a container. */
		Id: FormControl<string | null | undefined>,

		/** Full path to the container image in your private Bluemix registry. */
		Image: FormControl<string | null | undefined>,

		/** Unique identifier representing a container image. */
		ImageId: FormControl<string | null | undefined>,

		/** List of custom metadata that was added to the container. Labels serve a wide range of uses, such as adding notes to a container. Every label is a key/ value pair. */
		Labels: FormControl<string | null | undefined>,

		/**
		 * The amount of container memory in Megabyte that was assigned to your container. The memory is counted towards the quota that is allocated for the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Memory: FormControl<number | null | undefined>,

		/** The name of the container. */
		Name: FormControl<string | null | undefined>,

		/**
		 * Total size of all the files in the container, in bytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SizeRootFs: FormControl<number | null | undefined>,

		/**
		 * The size of the files which have been created or changed, if you compare the container to its base image. Just after creation, this should be zero. Ass you modify (or create) files, this size will increase.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SizeRw: FormControl<number | null | undefined>,

		/**
		 * Time when the container was started.
		 * Type: float
		 */
		Started: FormControl<number | null | undefined>,

		/** The current status of the container. The status can either be a transient state, such as BUILDING, and NETWORKING or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, PAUSED, or SUSPENDED */
		Status: FormControl<string | null | undefined>,

		/**
		 * Number of virtual CPUs that are assigned to the container.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VCPU: FormControl<number | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			Command: new FormControl<string | null | undefined>(undefined),
			ContainerState: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined),
			ImageId: new FormControl<string | null | undefined>(undefined),
			Labels: new FormControl<string | null | undefined>(undefined),
			Memory: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SizeRootFs: new FormControl<number | null | undefined>(undefined),
			SizeRw: new FormControl<number | null | undefined>(undefined),
			Started: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			VCPU: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainerConfig {
		ArgsEscaped?: boolean | null;

		/** Attaches the container to stderr. */
		AttachStderr?: string | null;

		/** Attaches the container to sdtin. */
		AttachStdin?: string | null;

		/** Attaches the container to stdout. */
		AttachStdout?: string | null;

		/**
		 * The command and arguments in this list are passed to the container to be executed when the container is started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash. <br>Sample long-running commands:<br>["ping","localhost"]<br>["tail","-f","/dev/null"]<br>["sh","-c","while true; do date; sleep 20; done"]
		 */
		Cmd?: Array<string>;

		/** The domain name to be used for the container. */
		Domainname?: string | null;

		/** A list of environment variables in the form of key=value pairs. All keys in this list have to be unique. List multiple keys separately and if you include quotation marks, include them around both the environment variable name and the value. */
		Env?: Array<string>;

		/** List of public ports that were exposed during container creation. */
		ExposedPorts?: Array<string>;

		/** The host name to be used for the container. */
		Hostname?: string | null;

		/** Full path to the image that the container is based on in your private Bluemix registry. */
		Image?: string | null;

		/** The hardware architecture the image is based on. It can either be 'amd64' indicating an Intel-based architecture, or 'ppc64le' representing a Power-based architecture. */
		ImageArchitecture?: string | null;

		/** List of custom metadata that was added to the container. Labels serve a wide range of uses, such as adding notes to a container. Every label is a key/ value pair. */
		Labels?: Array<string>;

		/**
		 * The amount of container memory that is assigned to the container in Megabyte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Memory?: number | null;

		/** The total container memory limit (memory + swap) */
		MemorySwap?: string | null;

		/** When set to true, it opens stdin. */
		OpenStdin?: string | null;

		/** Not supported by IBM Containers, empty string. */
		PortSpecs?: string | null;

		/** When set to true it closes stdin after the attached client disconnects. */
		StdinOnce?: string | null;

		/** When set to true, attach standard streams to a tty, including stdin if it is not closed. */
		Tty?: string | null;

		/** User to be used inside the container. */
		User?: string | null;

		/**
		 * Number of virtual CPUs that are assigned to the container.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VCPU?: number | null;

		/** List of volumes to inherit from another container. This feature is not supported in IBM Containers. */
		VolumesFrom?: string | null;

		/** The working directory inside the container where specified commands are executed. */
		WorkingDir?: string | null;
	}
	export interface ContainerConfigFormProperties {
		ArgsEscaped: FormControl<boolean | null | undefined>,

		/** Attaches the container to stderr. */
		AttachStderr: FormControl<string | null | undefined>,

		/** Attaches the container to sdtin. */
		AttachStdin: FormControl<string | null | undefined>,

		/** Attaches the container to stdout. */
		AttachStdout: FormControl<string | null | undefined>,

		/** The domain name to be used for the container. */
		Domainname: FormControl<string | null | undefined>,

		/** The host name to be used for the container. */
		Hostname: FormControl<string | null | undefined>,

		/** Full path to the image that the container is based on in your private Bluemix registry. */
		Image: FormControl<string | null | undefined>,

		/** The hardware architecture the image is based on. It can either be 'amd64' indicating an Intel-based architecture, or 'ppc64le' representing a Power-based architecture. */
		ImageArchitecture: FormControl<string | null | undefined>,

		/**
		 * The amount of container memory that is assigned to the container in Megabyte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Memory: FormControl<number | null | undefined>,

		/** The total container memory limit (memory + swap) */
		MemorySwap: FormControl<string | null | undefined>,

		/** When set to true, it opens stdin. */
		OpenStdin: FormControl<string | null | undefined>,

		/** Not supported by IBM Containers, empty string. */
		PortSpecs: FormControl<string | null | undefined>,

		/** When set to true it closes stdin after the attached client disconnects. */
		StdinOnce: FormControl<string | null | undefined>,

		/** When set to true, attach standard streams to a tty, including stdin if it is not closed. */
		Tty: FormControl<string | null | undefined>,

		/** User to be used inside the container. */
		User: FormControl<string | null | undefined>,

		/**
		 * Number of virtual CPUs that are assigned to the container.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VCPU: FormControl<number | null | undefined>,

		/** List of volumes to inherit from another container. This feature is not supported in IBM Containers. */
		VolumesFrom: FormControl<string | null | undefined>,

		/** The working directory inside the container where specified commands are executed. */
		WorkingDir: FormControl<string | null | undefined>,
	}
	export function CreateContainerConfigFormGroup() {
		return new FormGroup<ContainerConfigFormProperties>({
			ArgsEscaped: new FormControl<boolean | null | undefined>(undefined),
			AttachStderr: new FormControl<string | null | undefined>(undefined),
			AttachStdin: new FormControl<string | null | undefined>(undefined),
			AttachStdout: new FormControl<string | null | undefined>(undefined),
			Domainname: new FormControl<string | null | undefined>(undefined),
			Hostname: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined),
			ImageArchitecture: new FormControl<string | null | undefined>(undefined),
			Memory: new FormControl<number | null | undefined>(undefined),
			MemorySwap: new FormControl<string | null | undefined>(undefined),
			OpenStdin: new FormControl<string | null | undefined>(undefined),
			PortSpecs: new FormControl<string | null | undefined>(undefined),
			StdinOnce: new FormControl<string | null | undefined>(undefined),
			Tty: new FormControl<string | null | undefined>(undefined),
			User: new FormControl<string | null | undefined>(undefined),
			VCPU: new FormControl<number | null | undefined>(undefined),
			VolumesFrom: new FormControl<string | null | undefined>(undefined),
			WorkingDir: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainerId {

		/** Unique ID representing a container. */
		Id?: string | null;

		/**
		 * The ID of the container size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		flavor_id?: number | null;

		/**
		 * The amount of container memory that has been assigned to the container. If the container memory was not specified in the API request, a container with 64 Megabyte container memory is created by default.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mem?: number | null;

		/**
		 * Number of virtual CPUs that are assigned to the container.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vcpu?: number | null;
	}
	export interface ContainerIdFormProperties {

		/** Unique ID representing a container. */
		Id: FormControl<string | null | undefined>,

		/**
		 * The ID of the container size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		flavor_id: FormControl<number | null | undefined>,

		/**
		 * The amount of container memory that has been assigned to the container. If the container memory was not specified in the API request, a container with 64 Megabyte container memory is created by default.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		mem: FormControl<number | null | undefined>,

		/**
		 * Number of virtual CPUs that are assigned to the container.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vcpu: FormControl<number | null | undefined>,
	}
	export function CreateContainerIdFormGroup() {
		return new FormGroup<ContainerIdFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			flavor_id: new FormControl<number | null | undefined>(undefined),
			mem: new FormControl<number | null | undefined>(undefined),
			vcpu: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainerInfo {

		/** The name of the Cloud Foundry app that was bound to the container during creation. */
		BluemixApp?: string | null;

		/** The name of the Bluemix service instance that was bound to the container during creation. */
		BluemixServices?: string | null;
		Config?: ContainerConfig;

		/** The current status of the container. This state can either be transient, such as BUILDING or NETWORKING, or non-transient, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED. */
		ContainerState?: string | null;

		/** The date and time the container was created. */
		Created?: Date | null;
		Group?: Group;
		HostConfig?: HostConfig;

		/** The ID representing the physical compute host. */
		HostId?: string | null;

		/** The name of the container. */
		Human_Id?: string | null;

		/** Unique identifier representing a container. */
		Id?: string | null;

		/** Unique identifier representing a container image. */
		Image?: string | null;

		/** A list of volumes that are mounted to the container. */
		Mounts?: Array<string>;

		/** The name of the container. */
		Name?: string | null;
		NetworkSettings?: NetworkSetting;

		/** The environment variable indicating the binary location. */
		Path?: string | null;

		/** Path to the resolve.conf file inside the container. The resolve.conf file is used to resolve the DNS servers. */
		ResolveConfPath?: string | null;
		State?: ContainerState;
		Volumes?: Volume;

		/** LIst of volumes that is mounted to the container. */
		VolumesRW?: Array<string>;
	}
	export interface ContainerInfoFormProperties {

		/** The name of the Cloud Foundry app that was bound to the container during creation. */
		BluemixApp: FormControl<string | null | undefined>,

		/** The name of the Bluemix service instance that was bound to the container during creation. */
		BluemixServices: FormControl<string | null | undefined>,

		/** The current status of the container. This state can either be transient, such as BUILDING or NETWORKING, or non-transient, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED. */
		ContainerState: FormControl<string | null | undefined>,

		/** The date and time the container was created. */
		Created: FormControl<Date | null | undefined>,

		/** The ID representing the physical compute host. */
		HostId: FormControl<string | null | undefined>,

		/** The name of the container. */
		Human_Id: FormControl<string | null | undefined>,

		/** Unique identifier representing a container. */
		Id: FormControl<string | null | undefined>,

		/** Unique identifier representing a container image. */
		Image: FormControl<string | null | undefined>,

		/** The name of the container. */
		Name: FormControl<string | null | undefined>,

		/** The environment variable indicating the binary location. */
		Path: FormControl<string | null | undefined>,

		/** Path to the resolve.conf file inside the container. The resolve.conf file is used to resolve the DNS servers. */
		ResolveConfPath: FormControl<string | null | undefined>,
	}
	export function CreateContainerInfoFormGroup() {
		return new FormGroup<ContainerInfoFormProperties>({
			BluemixApp: new FormControl<string | null | undefined>(undefined),
			BluemixServices: new FormControl<string | null | undefined>(undefined),
			ContainerState: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<Date | null | undefined>(undefined),
			HostId: new FormControl<string | null | undefined>(undefined),
			Human_Id: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Path: new FormControl<string | null | undefined>(undefined),
			ResolveConfPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HostConfig {

		/** A list of volumes to be bound to the container. Each volume must be listed in the following format: VOLNAME:/CONTAINER_PATH:rw [ro]. */
		Binds?: Array<string>;

		/**
		 * A list of hostnames/IP mappings to be added to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]
		 */
		ExtraHosts?: Array<string>;

		/** A list of containers that need to be linked. */
		Links?: Array<string>;

		/**
		 * The container ports that you want to expose to the public. Ports need to be specified in the form of &lt;port&gt;/&lt;protocol&gt;: [{ "HostIp": "&lt;IP&gt;", "HostPort": "&lt;port&gt;" }]
		 */
		PortBindings?: Array<string>;
	}
	export interface HostConfigFormProperties {
	}
	export function CreateHostConfigFormGroup() {
		return new FormGroup<HostConfigFormProperties>({
		});

	}

	export interface ContainerState {

		/** The exit code indicating the root cause of why the container exited. Review the Docker API documentation to find a list of exit codes and their meaning. */
		ExitCode?: string | null;

		/** Time when the container stopped. */
		FinishedAt?: string | null;

		/** Not supported by IBM Containers, empty string */
		Ghost?: string | null;

		/**
		 * The process ID on the compute host that runs the container process.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Pid?: number | null;

		/** If set to true, the container is in a RUNNING state. If set to false, the container has stopped or crashed. */
		Running?: boolean | null;

		/** Time when the container started. */
		StartedAt?: string | null;

		/** The current status of the container. This state can either be transient, such as BUILDING or NETWORKING, or non-transient, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED. */
		Status?: string | null;
	}
	export interface ContainerStateFormProperties {

		/** The exit code indicating the root cause of why the container exited. Review the Docker API documentation to find a list of exit codes and their meaning. */
		ExitCode: FormControl<string | null | undefined>,

		/** Time when the container stopped. */
		FinishedAt: FormControl<string | null | undefined>,

		/** Not supported by IBM Containers, empty string */
		Ghost: FormControl<string | null | undefined>,

		/**
		 * The process ID on the compute host that runs the container process.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Pid: FormControl<number | null | undefined>,

		/** If set to true, the container is in a RUNNING state. If set to false, the container has stopped or crashed. */
		Running: FormControl<boolean | null | undefined>,

		/** Time when the container started. */
		StartedAt: FormControl<string | null | undefined>,

		/** The current status of the container. This state can either be transient, such as BUILDING or NETWORKING, or non-transient, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED. */
		Status: FormControl<string | null | undefined>,
	}
	export function CreateContainerStateFormGroup() {
		return new FormGroup<ContainerStateFormProperties>({
			ExitCode: new FormControl<string | null | undefined>(undefined),
			FinishedAt: new FormControl<string | null | undefined>(undefined),
			Ghost: new FormControl<string | null | undefined>(undefined),
			Pid: new FormControl<number | null | undefined>(undefined),
			Running: new FormControl<boolean | null | undefined>(undefined),
			StartedAt: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsGetListItem {

		/** Time when the container group is created. */
		Creation_time?: string | null;

		/** Unique identifier of the container group. */
		Id?: string | null;

		/** Name of the container group. */
		Name?: string | null;

		/**
		 * The port number that is exposed to the public during container group creation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Port?: number | null;

		/** The public route that is mapped to the container group. You can use this route to access your container group from the Internet. */
		Routes?: Array<string>;

		/** Current status of the container group. The container group status is a composite of ACTION and STATUS:<br><br> ACTIONS = (CREATE, DELETE, UPDATE, ROLLBACK, SUSPEND, RESUME, ADOPT, SNAPSHOT, CHECK, RESTORE)<br><br> STATUSES = (IN_PROGRESS, FAILED, COMPLETE) */
		Status?: string | null;

		/** Time when the container group is changed and updated. */
		Updated_time?: string | null;
	}
	export interface ContainersGroupsGetListItemFormProperties {

		/** Time when the container group is created. */
		Creation_time: FormControl<string | null | undefined>,

		/** Unique identifier of the container group. */
		Id: FormControl<string | null | undefined>,

		/** Name of the container group. */
		Name: FormControl<string | null | undefined>,

		/**
		 * The port number that is exposed to the public during container group creation.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Port: FormControl<number | null | undefined>,

		/** Current status of the container group. The container group status is a composite of ACTION and STATUS:<br><br> ACTIONS = (CREATE, DELETE, UPDATE, ROLLBACK, SUSPEND, RESUME, ADOPT, SNAPSHOT, CHECK, RESTORE)<br><br> STATUSES = (IN_PROGRESS, FAILED, COMPLETE) */
		Status: FormControl<string | null | undefined>,

		/** Time when the container group is changed and updated. */
		Updated_time: FormControl<string | null | undefined>,
	}
	export function CreateContainersGroupsGetListItemFormGroup() {
		return new FormGroup<ContainersGroupsGetListItemFormProperties>({
			Creation_time: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			Updated_time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsNameOrIdGetDetails {

		/** If set to `true` the container instances in the group are spread across separate physical compute nodes, which reduces the likelihood of containers crashing due to hardware failures. If set to `false`, the container instances in the group share the same physical compute node. */
		'Anti-affinity'?: string | null;

		/** Can be either true or false. If set to true, the Autorecovery mode is enabled for your container group. In case a container instance crashes or stops, this instance is removed and a new one is automatically recreated. If set to false, the Autorecovery mode is disabled. In case a container instances crashes or stops, it is not automatically recreated by IBM Containers. */
		Autorecovery?: string | null;

		/** Current IBM Containers availability zone on Openstack. */
		AvailabilityZone?: string | null;

		/** The Docker command that was specified to be run when the container instances are started. */
		Cmd?: Array<string>;

		/** Timestamp when the container group was created. */
		Creation_time?: string | null;

		/** The list of environmental variables that were defined for the container group. Each environment variable consists of a unique key and a value. */
		Env?: Array<string>;

		/** Unique identifier representing a specific container group. */
		Id?: string | null;

		/** The unique ID of the container image your container group instances are based on. */
		Image?: string | null;

		/** The full path to the container image in your private Bluemix repository. */
		ImageName?: string | null;

		/**
		 * The size of each container instance that runs in the container group in MegaByte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Memory?: number | null;

		/** The name of the container group. */
		Name?: string | null;
		NumberInstances?: ContainersGroupsNameOrIdGetDetailsNumberInstances;

		/**
		 * The public port that has been exposed. If you specified a route, your container group is accessible from the Internet.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Port?: number | null;
		Route_Status?: ContainersGroupsNameOrIdGetDetailsRoute_Status;

		/** The public route that is mapped to the container group. When you expose a public port, you can use the route to access your container group from the Internet. */
		Routes?: Array<string>;

		/** The current status of the container group. The container group status is a composite of ACTION and STATUS:<br><br> ACTIONS = (CREATE, DELETE, UPDATE, ROLLBACK, SUSPEND, RESUME, ADOPT, SNAPSHOT, CHECK, RESTORE)<br><br> STATUSES = (IN_PROGRESS, FAILED, COMPLETE) */
		Status?: string | null;

		/** Timestamp when the container group was updated. If the container group was not updated before, `null` is returned. */
		UpdatedTime?: string | null;

		/** List of volumes to be associated with the container, in the format of volume name:path:mode where mode can be ro or rw. */
		Volumes?: Array<string>;
	}
	export interface ContainersGroupsNameOrIdGetDetailsFormProperties {

		/** If set to `true` the container instances in the group are spread across separate physical compute nodes, which reduces the likelihood of containers crashing due to hardware failures. If set to `false`, the container instances in the group share the same physical compute node. */
		'Anti-affinity': FormControl<string | null | undefined>,

		/** Can be either true or false. If set to true, the Autorecovery mode is enabled for your container group. In case a container instance crashes or stops, this instance is removed and a new one is automatically recreated. If set to false, the Autorecovery mode is disabled. In case a container instances crashes or stops, it is not automatically recreated by IBM Containers. */
		Autorecovery: FormControl<string | null | undefined>,

		/** Current IBM Containers availability zone on Openstack. */
		AvailabilityZone: FormControl<string | null | undefined>,

		/** Timestamp when the container group was created. */
		Creation_time: FormControl<string | null | undefined>,

		/** Unique identifier representing a specific container group. */
		Id: FormControl<string | null | undefined>,

		/** The unique ID of the container image your container group instances are based on. */
		Image: FormControl<string | null | undefined>,

		/** The full path to the container image in your private Bluemix repository. */
		ImageName: FormControl<string | null | undefined>,

		/**
		 * The size of each container instance that runs in the container group in MegaByte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Memory: FormControl<number | null | undefined>,

		/** The name of the container group. */
		Name: FormControl<string | null | undefined>,

		/**
		 * The public port that has been exposed. If you specified a route, your container group is accessible from the Internet.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Port: FormControl<number | null | undefined>,

		/** The current status of the container group. The container group status is a composite of ACTION and STATUS:<br><br> ACTIONS = (CREATE, DELETE, UPDATE, ROLLBACK, SUSPEND, RESUME, ADOPT, SNAPSHOT, CHECK, RESTORE)<br><br> STATUSES = (IN_PROGRESS, FAILED, COMPLETE) */
		Status: FormControl<string | null | undefined>,

		/** Timestamp when the container group was updated. If the container group was not updated before, `null` is returned. */
		UpdatedTime: FormControl<string | null | undefined>,
	}
	export function CreateContainersGroupsNameOrIdGetDetailsFormGroup() {
		return new FormGroup<ContainersGroupsNameOrIdGetDetailsFormProperties>({
			'Anti-affinity': new FormControl<string | null | undefined>(undefined),
			Autorecovery: new FormControl<string | null | undefined>(undefined),
			AvailabilityZone: new FormControl<string | null | undefined>(undefined),
			Creation_time: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined),
			ImageName: new FormControl<string | null | undefined>(undefined),
			Memory: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Port: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
			UpdatedTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsNameOrIdGetDetailsNumberInstances {

		/**
		 * The current number of container instances that are running in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrentSize?: number | null;

		/**
		 * The number of container instances that you require.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Desired?: number | null;

		/**
		 * The maximum number of container instance that you want to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Max?: number | null;

		/**
		 * The minimum number of container instances that you want to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Min?: number | null;
	}
	export interface ContainersGroupsNameOrIdGetDetailsNumberInstancesFormProperties {

		/**
		 * The current number of container instances that are running in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		CurrentSize: FormControl<number | null | undefined>,

		/**
		 * The number of container instances that you require.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Desired: FormControl<number | null | undefined>,

		/**
		 * The maximum number of container instance that you want to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * The minimum number of container instances that you want to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Min: FormControl<number | null | undefined>,
	}
	export function CreateContainersGroupsNameOrIdGetDetailsNumberInstancesFormGroup() {
		return new FormGroup<ContainersGroupsNameOrIdGetDetailsNumberInstancesFormProperties>({
			CurrentSize: new FormControl<number | null | undefined>(undefined),
			Desired: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsNameOrIdGetDetailsRoute_Status {

		/** Can be either true or false. If set to true, then the route is in the process of being mapped to the container group and set up in the GoRouter. Is set to false, then the set up of the route is completed. */
		in_progress?: boolean | null;

		/** Info message for the user. */
		message?: string | null;

		/** Can be either true or false. If set to true, then the route is successfully registrered with the GoRouter. If set to false, then the route registration has not yet finished yet or could not be completed without errors. */
		successful?: boolean | null;
	}
	export interface ContainersGroupsNameOrIdGetDetailsRoute_StatusFormProperties {

		/** Can be either true or false. If set to true, then the route is in the process of being mapped to the container group and set up in the GoRouter. Is set to false, then the set up of the route is completed. */
		in_progress: FormControl<boolean | null | undefined>,

		/** Info message for the user. */
		message: FormControl<string | null | undefined>,

		/** Can be either true or false. If set to true, then the route is successfully registrered with the GoRouter. If set to false, then the route registration has not yet finished yet or could not be completed without errors. */
		successful: FormControl<boolean | null | undefined>,
	}
	export function CreateContainersGroupsNameOrIdGetDetailsRoute_StatusFormGroup() {
		return new FormGroup<ContainersGroupsNameOrIdGetDetailsRoute_StatusFormProperties>({
			in_progress: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			successful: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsNameOrIdMaproutePostInfo extends ContainersGroupsPostCreatedInfo {
	}
	export interface ContainersGroupsNameOrIdMaproutePostInfoFormProperties extends ContainersGroupsPostCreatedInfoFormProperties {
	}
	export function CreateContainersGroupsNameOrIdMaproutePostInfoFormGroup() {
		return new FormGroup<ContainersGroupsNameOrIdMaproutePostInfoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsNameOrIdPatchUpdatedInfo {

		/** Enable or disable the Autorecovery mode for your container group. To enable it, enter true. If you want to disable it, enter false. Note: You can only enable/ disable Autorecovery mode if your container group was initially created with Autorecovery mode enabled. */
		Autorecovery?: string | null;

		/** A list of environment variables that you want to add to your container group. Every environment variable needs to be a key=value pair. Every key that you use needs to be unique for this container group. Multiple environment variables are separated with comma (,) */
		Environment?: Array<string>;
		NumberInstances?: ContainersGroupsNameOrIdPatchUpdatedInfoNumberInstances;
	}
	export interface ContainersGroupsNameOrIdPatchUpdatedInfoFormProperties {

		/** Enable or disable the Autorecovery mode for your container group. To enable it, enter true. If you want to disable it, enter false. Note: You can only enable/ disable Autorecovery mode if your container group was initially created with Autorecovery mode enabled. */
		Autorecovery: FormControl<string | null | undefined>,
	}
	export function CreateContainersGroupsNameOrIdPatchUpdatedInfoFormGroup() {
		return new FormGroup<ContainersGroupsNameOrIdPatchUpdatedInfoFormProperties>({
			Autorecovery: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsNameOrIdPatchUpdatedInfoNumberInstances {

		/**
		 * The number of container instances that you require.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Desired?: number | null;

		/**
		 * The maximum number of container instances that you want to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Max?: number | null;

		/**
		 * The minimum number of container instances that you want to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Min?: number | null;
	}
	export interface ContainersGroupsNameOrIdPatchUpdatedInfoNumberInstancesFormProperties {

		/**
		 * The number of container instances that you require.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Desired: FormControl<number | null | undefined>,

		/**
		 * The maximum number of container instances that you want to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * The minimum number of container instances that you want to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Min: FormControl<number | null | undefined>,
	}
	export function CreateContainersGroupsNameOrIdPatchUpdatedInfoNumberInstancesFormGroup() {
		return new FormGroup<ContainersGroupsNameOrIdPatchUpdatedInfoNumberInstancesFormProperties>({
			Desired: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsPostCreatedInfo {

		/** Unique identifier representing a specific container group. */
		Id?: string | null;

		/** Warning information (Initial warning is empty). */
		Warnings?: Array<string>;
	}
	export interface ContainersGroupsPostCreatedInfoFormProperties {

		/** Unique identifier representing a specific container group. */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateContainersGroupsPostCreatedInfoFormGroup() {
		return new FormGroup<ContainersGroupsPostCreatedInfoFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsPostRequiredAttributes {

		/** (Optional) Enable the Auto-recovery mode for your container group. If set to true, IBM Containers checks the health of each instance with an HTTP request to the port that is assigned. If the health check does not receive a TCP response from a container instance in two subsequent 90-second intervals, the instance is removed and replaced with a new instance. If set to false and container instances crash, they are not recovered by IBM Containers. */
		Autorecovery?: string | null;

		/** (Optional) The name of the Cloud Foundry app that you created in your organization space. */
		BluemixApp?: string | null;

		/** (Optional) Docker command that is passed to the container group to be run when the container instances are started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash. */
		Cmd?: Array<string>;

		/** (Optional) List of environmental variables. Every environment variable that is listed here needs to be a key=value pair. Every key that you use needs to be unique for this container group. Multiple environment variables are separated with comma (,). */
		Env?: Array<string>;

		/**
		 * (Required) The full path to your private Bluemix repository. If you want to use an image in your private Bluemix repository, specify the image in the following format: registry.ng.bluemix.net/NAMESPACE/IMAGE. If you want to use an IBM Containers provided image, do not include your organization's namespace. Specify the image in the following format: registry.ng.bluemix.net/IMAGE
		 * Required
		 */
		Image: string;

		/**
		 * (Optional) The size of each container instance in the container group. The size of each container instance in the group. Choose one of the following sizes and enter the size in MegaBytes: Pico 64 MB, Nano 128 MB, Micro 256 MB, Tiny 512 MB, Small 1 GB (1024 MB), Medium 2 GB (2048 MB), Large 4 GB (4096 MB) XLarge 8GB (8192 MB) and 2XLarge 16 GB (16384 MB). If you do not specify a size, all container instances in this group are created with 256 MB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Memory?: number | null;

		/**
		 * (Required) Name of the container group that you want to create. The name needs to be unique in your organization space and must start with a letter. Then, you can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-).
		 * Required
		 */
		Name: string;
		NumberInstances?: ContainersGroupsPostRequiredAttributesNumberInstances;

		/**
		 * (Optional) Expose a port for HTTP traffic to make your container group available from the Internet. Every container instance that is started for this group, listens on this port. Container groups cannot expose multiple ports. Note: You need to expose a port, when "Autorecovery" is set to true.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Port?: number | null;
		Route?: ContainersGroupsPostRequiredAttributesRoute;

		/** (Optional) List of volumes to be mounted to the container instances of your container group. You need to create the volume first by using the cf ic volume-create command before you can mount a volume to a container group. When you specify a volume, use the following format: NAME:PATH:MODE. For NAME, use either the name or ID of the volume. For the PATH, enter the absolute path to the volume directory in the container. For MODE, enter either ro (read-only) or rw (read-write). */
		Volumes?: Array<string>;
	}
	export interface ContainersGroupsPostRequiredAttributesFormProperties {

		/** (Optional) Enable the Auto-recovery mode for your container group. If set to true, IBM Containers checks the health of each instance with an HTTP request to the port that is assigned. If the health check does not receive a TCP response from a container instance in two subsequent 90-second intervals, the instance is removed and replaced with a new instance. If set to false and container instances crash, they are not recovered by IBM Containers. */
		Autorecovery: FormControl<string | null | undefined>,

		/** (Optional) The name of the Cloud Foundry app that you created in your organization space. */
		BluemixApp: FormControl<string | null | undefined>,

		/**
		 * (Required) The full path to your private Bluemix repository. If you want to use an image in your private Bluemix repository, specify the image in the following format: registry.ng.bluemix.net/NAMESPACE/IMAGE. If you want to use an IBM Containers provided image, do not include your organization's namespace. Specify the image in the following format: registry.ng.bluemix.net/IMAGE
		 * Required
		 */
		Image: FormControl<string | null | undefined>,

		/**
		 * (Optional) The size of each container instance in the container group. The size of each container instance in the group. Choose one of the following sizes and enter the size in MegaBytes: Pico 64 MB, Nano 128 MB, Micro 256 MB, Tiny 512 MB, Small 1 GB (1024 MB), Medium 2 GB (2048 MB), Large 4 GB (4096 MB) XLarge 8GB (8192 MB) and 2XLarge 16 GB (16384 MB). If you do not specify a size, all container instances in this group are created with 256 MB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Memory: FormControl<number | null | undefined>,

		/**
		 * (Required) Name of the container group that you want to create. The name needs to be unique in your organization space and must start with a letter. Then, you can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-).
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * (Optional) Expose a port for HTTP traffic to make your container group available from the Internet. Every container instance that is started for this group, listens on this port. Container groups cannot expose multiple ports. Note: You need to expose a port, when "Autorecovery" is set to true.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Port: FormControl<number | null | undefined>,
	}
	export function CreateContainersGroupsPostRequiredAttributesFormGroup() {
		return new FormGroup<ContainersGroupsPostRequiredAttributesFormProperties>({
			Autorecovery: new FormControl<string | null | undefined>(undefined),
			BluemixApp: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Memory: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsPostRequiredAttributesNumberInstances {

		/**
		 * (Optional) The number of container instances that you require.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Desired?: number | null;

		/**
		 * (Optional) The maximum number of container instances that you want to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Max?: number | null;

		/**
		 * (Optional) The minimum number of container instances that need to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Min?: number | null;
	}
	export interface ContainersGroupsPostRequiredAttributesNumberInstancesFormProperties {

		/**
		 * (Optional) The number of container instances that you require.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Desired: FormControl<number | null | undefined>,

		/**
		 * (Optional) The maximum number of container instances that you want to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Max: FormControl<number | null | undefined>,

		/**
		 * (Optional) The minimum number of container instances that need to run in your container group.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Min: FormControl<number | null | undefined>,
	}
	export function CreateContainersGroupsPostRequiredAttributesNumberInstancesFormGroup() {
		return new FormGroup<ContainersGroupsPostRequiredAttributesNumberInstancesFormProperties>({
			Desired: new FormControl<number | null | undefined>(undefined),
			Max: new FormControl<number | null | undefined>(undefined),
			Min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainersGroupsPostRequiredAttributesRoute {

		/** The default system domain is mybluemix.net and already provides a SSL certificate, so you can access your container groups with HTTPS without any additional configuration. */
		domain?: string | null;

		/** The host name of your container group, such as mycontainerhost. Do not include underscores (_) in the host name. The host and the domain combined form the full public route URL, such as http://mycontainerhost.mybluemix.net. */
		host?: string | null;
	}
	export interface ContainersGroupsPostRequiredAttributesRouteFormProperties {

		/** The default system domain is mybluemix.net and already provides a SSL certificate, so you can access your container groups with HTTPS without any additional configuration. */
		domain: FormControl<string | null | undefined>,

		/** The host name of your container group, such as mycontainerhost. Do not include underscores (_) in the host name. The host and the domain combined form the full public route URL, such as http://mycontainerhost.mybluemix.net. */
		host: FormControl<string | null | undefined>,
	}
	export function CreateContainersGroupsPostRequiredAttributesRouteFormGroup() {
		return new FormGroup<ContainersGroupsPostRequiredAttributesRouteFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainersQuotaInfo {

		/** The Bluemix account type indicating the quota limits and how the organization is billed. */
		account_type?: string | null;

		/** The country in which the account was opened. */
		country_code?: string | null;
		org_quota?: ContainersQuotaInfoOrg_quota;
		space_quota?: ContainersQuotaInfoSpace_quota;
	}
	export interface ContainersQuotaInfoFormProperties {

		/** The Bluemix account type indicating the quota limits and how the organization is billed. */
		account_type: FormControl<string | null | undefined>,

		/** The country in which the account was opened. */
		country_code: FormControl<string | null | undefined>,
	}
	export function CreateContainersQuotaInfoFormGroup() {
		return new FormGroup<ContainersQuotaInfoFormProperties>({
			account_type: new FormControl<string | null | undefined>(undefined),
			country_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainersQuotaInfoOrg_quota {

		/** The number of public IP addresses that can be assigned across all spaces of the organization. */
		floating_ips_max?: string | null;

		/** The number of public IP addresses that are required for one space. If the number of public IP addresses is not available, then a new space cannot be created to be used with IBM Containers. */
		floating_ips_space_default?: string | null;

		/**
		 * The number of public IP addresses that are currently assigned to the spaces of the organization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		floating_ips_usage?: number | null;

		/**
		 * The maximum amount of container memory on the compute host that can be assigned across the spaces of the organization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ram_max?: number | null;

		/**
		 * The amount of container memory that is required to be used for one space. If this amount is not available, then a new space cannot be created to be used with IBM Containers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ram_space_default?: number | null;

		/**
		 * The amount of container memory that is currently used across all spaces of the organization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ram_usage?: number | null;

		/**
		 * The number of subnets that were created across all spaces of the organization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subnet_usage?: number | null;

		/**
		 * The number of subnets that is required to create a new space. If this number is not available, then a new space cannot be created to be used with IBM Containers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subnets_default?: number | null;

		/**
		 * The maximum number of container private subnet that can be created across all spaces of the organization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subnets_max?: number | null;
	}
	export interface ContainersQuotaInfoOrg_quotaFormProperties {

		/** The number of public IP addresses that can be assigned across all spaces of the organization. */
		floating_ips_max: FormControl<string | null | undefined>,

		/** The number of public IP addresses that are required for one space. If the number of public IP addresses is not available, then a new space cannot be created to be used with IBM Containers. */
		floating_ips_space_default: FormControl<string | null | undefined>,

		/**
		 * The number of public IP addresses that are currently assigned to the spaces of the organization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		floating_ips_usage: FormControl<number | null | undefined>,

		/**
		 * The maximum amount of container memory on the compute host that can be assigned across the spaces of the organization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ram_max: FormControl<number | null | undefined>,

		/**
		 * The amount of container memory that is required to be used for one space. If this amount is not available, then a new space cannot be created to be used with IBM Containers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ram_space_default: FormControl<number | null | undefined>,

		/**
		 * The amount of container memory that is currently used across all spaces of the organization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ram_usage: FormControl<number | null | undefined>,

		/**
		 * The number of subnets that were created across all spaces of the organization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subnet_usage: FormControl<number | null | undefined>,

		/**
		 * The number of subnets that is required to create a new space. If this number is not available, then a new space cannot be created to be used with IBM Containers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subnets_default: FormControl<number | null | undefined>,

		/**
		 * The maximum number of container private subnet that can be created across all spaces of the organization.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subnets_max: FormControl<number | null | undefined>,
	}
	export function CreateContainersQuotaInfoOrg_quotaFormGroup() {
		return new FormGroup<ContainersQuotaInfoOrg_quotaFormProperties>({
			floating_ips_max: new FormControl<string | null | undefined>(undefined),
			floating_ips_space_default: new FormControl<string | null | undefined>(undefined),
			floating_ips_usage: new FormControl<number | null | undefined>(undefined),
			ram_max: new FormControl<number | null | undefined>(undefined),
			ram_space_default: new FormControl<number | null | undefined>(undefined),
			ram_usage: new FormControl<number | null | undefined>(undefined),
			subnet_usage: new FormControl<number | null | undefined>(undefined),
			subnets_default: new FormControl<number | null | undefined>(undefined),
			subnets_max: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainersQuotaInfoSpace_quota {

		/** The maximum number of public IP addresses that can be allocated to a space. */
		floating_ips_max?: string | null;

		/**
		 * The maximum amount of container memory that can be shared across all containers that are created in a space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ram_max?: number | null;

		/**
		 * The maximum number of private subnets that can be created in one space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subnets_max?: number | null;
	}
	export interface ContainersQuotaInfoSpace_quotaFormProperties {

		/** The maximum number of public IP addresses that can be allocated to a space. */
		floating_ips_max: FormControl<string | null | undefined>,

		/**
		 * The maximum amount of container memory that can be shared across all containers that are created in a space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ram_max: FormControl<number | null | undefined>,

		/**
		 * The maximum number of private subnets that can be created in one space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subnets_max: FormControl<number | null | undefined>,
	}
	export function CreateContainersQuotaInfoSpace_quotaFormGroup() {
		return new FormGroup<ContainersQuotaInfoSpace_quotaFormProperties>({
			floating_ips_max: new FormControl<string | null | undefined>(undefined),
			ram_max: new FormControl<number | null | undefined>(undefined),
			subnets_max: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainersQuotaList {

		/**
		 * The new number of public IP addresses that you want to assign to your space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		floating_ips?: number | null;

		/**
		 * The amount of container memory that you want to assign to your space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ram?: number | null;
	}
	export interface ContainersQuotaListFormProperties {

		/**
		 * The new number of public IP addresses that you want to assign to your space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		floating_ips: FormControl<number | null | undefined>,

		/**
		 * The amount of container memory that you want to assign to your space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ram: FormControl<number | null | undefined>,
	}
	export function CreateContainersQuotaListFormGroup() {
		return new FormGroup<ContainersQuotaListFormProperties>({
			floating_ips: new FormControl<number | null | undefined>(undefined),
			ram: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainersUsageInfo {
		AvailableSizes?: Array<ContainersUsageInfoAvailableSizes>;

		/** The IBM Containers machine where the space is located */
		Environment?: string | null;
		Limits?: ContainersUsageInfoLimits;
		Usage?: ContainersUsageInfoUsage;
	}
	export interface ContainersUsageInfoFormProperties {

		/** The IBM Containers machine where the space is located */
		Environment: FormControl<string | null | undefined>,
	}
	export function CreateContainersUsageInfoFormGroup() {
		return new FormGroup<ContainersUsageInfoFormProperties>({
			Environment: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainersUsageInfoAvailableSizes {

		/**
		 * The amount of disk space on the compute host that is assigned to the container in gigabyte
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		disk?: number | null;

		/** The ID of the container size. */
		id?: string | null;

		/**
		 * The amount of container memory on the compute host that is assigned to the container in megabyte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memory_MB?: number | null;

		/** The IBM Containers name of the container size. */
		name?: string | null;

		/**
		 * The number of virtual CPUs that can be assigned to the container.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vcpus?: number | null;
	}
	export interface ContainersUsageInfoAvailableSizesFormProperties {

		/**
		 * The amount of disk space on the compute host that is assigned to the container in gigabyte
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		disk: FormControl<number | null | undefined>,

		/** The ID of the container size. */
		id: FormControl<string | null | undefined>,

		/**
		 * The amount of container memory on the compute host that is assigned to the container in megabyte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memory_MB: FormControl<number | null | undefined>,

		/** The IBM Containers name of the container size. */
		name: FormControl<string | null | undefined>,

		/**
		 * The number of virtual CPUs that can be assigned to the container.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vcpus: FormControl<number | null | undefined>,
	}
	export function CreateContainersUsageInfoAvailableSizesFormGroup() {
		return new FormGroup<ContainersUsageInfoAvailableSizesFormProperties>({
			disk: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			memory_MB: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			vcpus: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainersUsageInfoLimits {

		/**
		 * The number of containers that can be created in the space. If -1 is returned, then an unlimited number of containers can be created. The number however is counted towards and limited by the container memory.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		containers?: number | null;

		/**
		 * The number of public IP addresses that can be allocated to the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		floating_ips?: number | null;

		/**
		 * The amount of container memory that can be used in the space in megabyte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memory_MB?: number | null;

		/**
		 * The number of virtual CPUs that are assigned to the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vcpu?: number | null;
	}
	export interface ContainersUsageInfoLimitsFormProperties {

		/**
		 * The number of containers that can be created in the space. If -1 is returned, then an unlimited number of containers can be created. The number however is counted towards and limited by the container memory.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		containers: FormControl<number | null | undefined>,

		/**
		 * The number of public IP addresses that can be allocated to the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		floating_ips: FormControl<number | null | undefined>,

		/**
		 * The amount of container memory that can be used in the space in megabyte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memory_MB: FormControl<number | null | undefined>,

		/**
		 * The number of virtual CPUs that are assigned to the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vcpu: FormControl<number | null | undefined>,
	}
	export function CreateContainersUsageInfoLimitsFormGroup() {
		return new FormGroup<ContainersUsageInfoLimitsFormProperties>({
			containers: new FormControl<number | null | undefined>(undefined),
			floating_ips: new FormControl<number | null | undefined>(undefined),
			memory_MB: new FormControl<number | null | undefined>(undefined),
			vcpu: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainersUsageInfoUsage {

		/**
		 * The number of containers that were created in the space. All containers that count towards the quota limit are listed independent on their current state.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		containers?: number | null;

		/**
		 * The number of public IP addresses that are allocated to the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		floating_ips?: number | null;

		/**
		 * The number of public IP addresses that are bound to a container in the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		floating_ips_bound?: number | null;

		/**
		 * The number of private images that were added to the private Bluemix registry.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		images?: number | null;

		/**
		 * The amount of container memory that is already used by the containers that were created in the space in megabyte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memory_MB?: number | null;

		/**
		 * The number of containers that are currently in a running state.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		running?: number | null;

		/**
		 * The number of virtual CPUs that are allocated to the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vcpu?: number | null;
	}
	export interface ContainersUsageInfoUsageFormProperties {

		/**
		 * The number of containers that were created in the space. All containers that count towards the quota limit are listed independent on their current state.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		containers: FormControl<number | null | undefined>,

		/**
		 * The number of public IP addresses that are allocated to the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		floating_ips: FormControl<number | null | undefined>,

		/**
		 * The number of public IP addresses that are bound to a container in the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		floating_ips_bound: FormControl<number | null | undefined>,

		/**
		 * The number of private images that were added to the private Bluemix registry.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		images: FormControl<number | null | undefined>,

		/**
		 * The amount of container memory that is already used by the containers that were created in the space in megabyte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memory_MB: FormControl<number | null | undefined>,

		/**
		 * The number of containers that are currently in a running state.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		running: FormControl<number | null | undefined>,

		/**
		 * The number of virtual CPUs that are allocated to the space.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vcpu: FormControl<number | null | undefined>,
	}
	export function CreateContainersUsageInfoUsageFormGroup() {
		return new FormGroup<ContainersUsageInfoUsageFormProperties>({
			containers: new FormControl<number | null | undefined>(undefined),
			floating_ips: new FormControl<number | null | undefined>(undefined),
			floating_ips_bound: new FormControl<number | null | undefined>(undefined),
			images: new FormControl<number | null | undefined>(undefined),
			memory_MB: new FormControl<number | null | undefined>(undefined),
			running: new FormControl<number | null | undefined>(undefined),
			vcpu: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContainersVersionGetInfo {

		/** The current API version. */
		ApiVersion?: string | null;

		/** The current Arch version. */
		Arch?: string | null;
		BuildDetail?: ContainersVersionGetInfoBuildDetail;
		BuildID?: string | null;
		BuildNumber?: string | null;

		/** Timestamp when the API version and all attached microservices were built. */
		BuildTime?: string | null;
		GitCommit?: string | null;

		/** The latest Go version. */
		GoVersion?: string | null;

		/** The latest Kernel version. */
		KernelVersion?: string | null;

		/** Bluemix Containers */
		Os?: string | null;

		/** The latest API version. */
		Version?: string | null;
	}
	export interface ContainersVersionGetInfoFormProperties {

		/** The current API version. */
		ApiVersion: FormControl<string | null | undefined>,

		/** The current Arch version. */
		Arch: FormControl<string | null | undefined>,
		BuildID: FormControl<string | null | undefined>,
		BuildNumber: FormControl<string | null | undefined>,

		/** Timestamp when the API version and all attached microservices were built. */
		BuildTime: FormControl<string | null | undefined>,
		GitCommit: FormControl<string | null | undefined>,

		/** The latest Go version. */
		GoVersion: FormControl<string | null | undefined>,

		/** The latest Kernel version. */
		KernelVersion: FormControl<string | null | undefined>,

		/** Bluemix Containers */
		Os: FormControl<string | null | undefined>,

		/** The latest API version. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateContainersVersionGetInfoFormGroup() {
		return new FormGroup<ContainersVersionGetInfoFormProperties>({
			ApiVersion: new FormControl<string | null | undefined>(undefined),
			Arch: new FormControl<string | null | undefined>(undefined),
			BuildID: new FormControl<string | null | undefined>(undefined),
			BuildNumber: new FormControl<string | null | undefined>(undefined),
			BuildTime: new FormControl<string | null | undefined>(undefined),
			GitCommit: new FormControl<string | null | undefined>(undefined),
			GoVersion: new FormControl<string | null | undefined>(undefined),
			KernelVersion: new FormControl<string | null | undefined>(undefined),
			Os: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainersVersionGetInfoBuildDetail {

		/** The build ID of the current API version. */
		api?: string | null;

		/** The build ID of the current automount microservice version. */
		automount?: string | null;

		/** The build ID of the current grupdater microservice version. */
		grupdater?: string | null;

		/** The build ID of the current harmony microservice version. */
		harmony?: string | null;

		/** The build ID of the current health-monitor microservice version. */
		'health-monitor'?: string | null;

		/** The build ID of the current hijack microservice version. */
		hijack?: string | null;

		/** The build ID of the current ldap microservice version. */
		ldap?: string | null;

		/** The build ID of the current logmet microservice version. */
		logmet?: string | null;

		/** The build ID of the current lumberjack microservice version. */
		lumberjack?: string | null;

		/** The build ID of the current redis-cluster version. */
		'redis-cluster'?: string | null;

		/** The build ID of the current sgwatcher microservice version. */
		sgwatcher?: string | null;

		/** The build ID of the current volumes manager microservice version. */
		volmgr?: string | null;
	}
	export interface ContainersVersionGetInfoBuildDetailFormProperties {

		/** The build ID of the current API version. */
		api: FormControl<string | null | undefined>,

		/** The build ID of the current automount microservice version. */
		automount: FormControl<string | null | undefined>,

		/** The build ID of the current grupdater microservice version. */
		grupdater: FormControl<string | null | undefined>,

		/** The build ID of the current harmony microservice version. */
		harmony: FormControl<string | null | undefined>,

		/** The build ID of the current health-monitor microservice version. */
		'health-monitor': FormControl<string | null | undefined>,

		/** The build ID of the current hijack microservice version. */
		hijack: FormControl<string | null | undefined>,

		/** The build ID of the current ldap microservice version. */
		ldap: FormControl<string | null | undefined>,

		/** The build ID of the current logmet microservice version. */
		logmet: FormControl<string | null | undefined>,

		/** The build ID of the current lumberjack microservice version. */
		lumberjack: FormControl<string | null | undefined>,

		/** The build ID of the current redis-cluster version. */
		'redis-cluster': FormControl<string | null | undefined>,

		/** The build ID of the current sgwatcher microservice version. */
		sgwatcher: FormControl<string | null | undefined>,

		/** The build ID of the current volumes manager microservice version. */
		volmgr: FormControl<string | null | undefined>,
	}
	export function CreateContainersVersionGetInfoBuildDetailFormGroup() {
		return new FormGroup<ContainersVersionGetInfoBuildDetailFormProperties>({
			api: new FormControl<string | null | undefined>(undefined),
			automount: new FormControl<string | null | undefined>(undefined),
			grupdater: new FormControl<string | null | undefined>(undefined),
			harmony: new FormControl<string | null | undefined>(undefined),
			'health-monitor': new FormControl<string | null | undefined>(undefined),
			hijack: new FormControl<string | null | undefined>(undefined),
			ldap: new FormControl<string | null | undefined>(undefined),
			logmet: new FormControl<string | null | undefined>(undefined),
			lumberjack: new FormControl<string | null | undefined>(undefined),
			'redis-cluster': new FormControl<string | null | undefined>(undefined),
			sgwatcher: new FormControl<string | null | undefined>(undefined),
			volmgr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateContainer {

		/** The name of the Cloud Foundry app that you want to bind to your container. The Cloud Foundry app must be created in the same space where you want to create your container. */
		BluemixApp?: string | null;

		/**
		 * The command and arguments in this list are passed to the container to be executed when the container is started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash. <br>Sample long-running commands:<br>["ping","localhost"]<br>["tail","-f","/dev/null"]<br>["sh","-c","while true; do date; sleep 20; done"]
		 */
		Cmd?: Array<string>;

		/** Pins the container processes to a specific CPU core on the compute host. For example: 0 means that processes are executed on the first core only. */
		Cpuset?: string | null;

		/** A list of environment variables in the form of key=value pairs. All keys in this list have to be unique. List multiple keys separately and if you include quotation marks, include them around both the environment variable name and the value. */
		Env?: Array<string>;

		/** All public ports that need to be exposed for the container, so the container can be accessed from the Internet. */
		ExposedPorts?: Array<string>;
		HostConfig?: HostConfig;

		/**
		 * Full path to the image in your private Bluemix registry in the format `registry.ng.bluemix.net/namespace/image`.
		 * Required
		 */
		Image: string;

		/**
		 * The container memory that is set for the container in Megabyte. Choose one of the following sizes: Pico 64 MB, Nano 128 MB, Micro 256 MB, Tiny 512 MB, Small 1 GB (1024 MB), Medium 2 GB (2048 MB), Large 4 GB (4096 MB) XLarge 8GB (8192 MB) and 2XLarge 16 GB (16384 MB).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Memory?: number | null;

		/**
		 * Number of virtual CPUs that are allocated to the container.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		NumberCpus?: number | null;

		/** Mount a volume to a container by specifying the details in the following format: `VOLUME_NAME:/DIRECTORY_PATH[:ro]`. Example: testvolume:/volumedata/temp:rw. By default, all volumes will be set up with read-write access inside the container (rw). If you wish to set up your volume with read-only access, enter `ro`.  Note: To mount a volume to a container, you must create the volume in your space first by using the `cf ic volume-create` command, or calling the `POST /volumes/create endpoint`. */
		Volumes?: string | null;
	}
	export interface CreateContainerFormProperties {

		/** The name of the Cloud Foundry app that you want to bind to your container. The Cloud Foundry app must be created in the same space where you want to create your container. */
		BluemixApp: FormControl<string | null | undefined>,

		/** Pins the container processes to a specific CPU core on the compute host. For example: 0 means that processes are executed on the first core only. */
		Cpuset: FormControl<string | null | undefined>,

		/**
		 * Full path to the image in your private Bluemix registry in the format `registry.ng.bluemix.net/namespace/image`.
		 * Required
		 */
		Image: FormControl<string | null | undefined>,

		/**
		 * The container memory that is set for the container in Megabyte. Choose one of the following sizes: Pico 64 MB, Nano 128 MB, Micro 256 MB, Tiny 512 MB, Small 1 GB (1024 MB), Medium 2 GB (2048 MB), Large 4 GB (4096 MB) XLarge 8GB (8192 MB) and 2XLarge 16 GB (16384 MB).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Memory: FormControl<number | null | undefined>,

		/**
		 * Number of virtual CPUs that are allocated to the container.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		NumberCpus: FormControl<number | null | undefined>,

		/** Mount a volume to a container by specifying the details in the following format: `VOLUME_NAME:/DIRECTORY_PATH[:ro]`. Example: testvolume:/volumedata/temp:rw. By default, all volumes will be set up with read-write access inside the container (rw). If you wish to set up your volume with read-only access, enter `ro`.  Note: To mount a volume to a container, you must create the volume in your space first by using the `cf ic volume-create` command, or calling the `POST /volumes/create endpoint`. */
		Volumes: FormControl<string | null | undefined>,
	}
	export function CreateCreateContainerFormGroup() {
		return new FormGroup<CreateContainerFormProperties>({
			BluemixApp: new FormControl<string | null | undefined>(undefined),
			Cpuset: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Memory: new FormControl<number | null | undefined>(undefined),
			NumberCpus: new FormControl<number | null | undefined>(undefined),
			Volumes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Fileshare {

		/**
		 * The size of the file share in gigabyte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity?: number | null;

		/** The timestamp when the file share was created. */
		created_date?: string | null;

		/** The name of the file share. */
		fsName?: string | null;

		/** The path to the volume on the host node. */
		hostPath?: string | null;

		/**
		 * The number of Input/Output operations per second.
		 * Type: double
		 */
		iops?: number | null;

		/**
		 * The total number of IOPS considering the size of the file share. The size of your file share in gigabyte multiplied with the number of IOPS indicates the total number of IOPS. The higher the number of IOPS the faster you can read from and write to your volumes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		iopsTotal?: number | null;

		/** The ID received from softlayer when the file share was ordered to be set up in softlayer. */
		orderId?: string | null;

		/** The provider of the file share. */
		provider?: string | null;

		/** The unique ID representing a Bluemix space in which the file share was created. */
		spaceGuid?: string | null;

		/** The current state of the file share. When the file share is ready to be used, this attribute is set to `READY`. */
		state?: string | null;

		/** The timestamp when the file share last was updated. */
		updated_date?: string | null;
	}
	export interface FileshareFormProperties {

		/**
		 * The size of the file share in gigabyte.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity: FormControl<number | null | undefined>,

		/** The timestamp when the file share was created. */
		created_date: FormControl<string | null | undefined>,

		/** The name of the file share. */
		fsName: FormControl<string | null | undefined>,

		/** The path to the volume on the host node. */
		hostPath: FormControl<string | null | undefined>,

		/**
		 * The number of Input/Output operations per second.
		 * Type: double
		 */
		iops: FormControl<number | null | undefined>,

		/**
		 * The total number of IOPS considering the size of the file share. The size of your file share in gigabyte multiplied with the number of IOPS indicates the total number of IOPS. The higher the number of IOPS the faster you can read from and write to your volumes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		iopsTotal: FormControl<number | null | undefined>,

		/** The ID received from softlayer when the file share was ordered to be set up in softlayer. */
		orderId: FormControl<string | null | undefined>,

		/** The provider of the file share. */
		provider: FormControl<string | null | undefined>,

		/** The unique ID representing a Bluemix space in which the file share was created. */
		spaceGuid: FormControl<string | null | undefined>,

		/** The current state of the file share. When the file share is ready to be used, this attribute is set to `READY`. */
		state: FormControl<string | null | undefined>,

		/** The timestamp when the file share last was updated. */
		updated_date: FormControl<string | null | undefined>,
	}
	export function CreateFileshareFormGroup() {
		return new FormGroup<FileshareFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			created_date: new FormControl<string | null | undefined>(undefined),
			fsName: new FormControl<string | null | undefined>(undefined),
			hostPath: new FormControl<string | null | undefined>(undefined),
			iops: new FormControl<number | null | undefined>(undefined),
			iopsTotal: new FormControl<number | null | undefined>(undefined),
			orderId: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			spaceGuid: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			updated_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileshareParam {

		/**
		 * The number of input/output transactions per second. Available values are 0.25, 2 or 4.
		 * Required
		 * Type: double
		 */
		fsIOPS: number;

		/**
		 * The name of the new file share that you want to create. The name can contain uppercase letters, lowercase letters, numbers, underscores (_), and hyphens (-).
		 * Required
		 */
		fsName: string;

		/**
		 * The size of the file share in gigabyte. Run `cf ic volume fs-flavor-list` or call the GET /volumes/fs/flavors/json API endpoint to retrieve a list of available file share sizes.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fsSize: number;
	}
	export interface FileshareParamFormProperties {

		/**
		 * The number of input/output transactions per second. Available values are 0.25, 2 or 4.
		 * Required
		 * Type: double
		 */
		fsIOPS: FormControl<number | null | undefined>,

		/**
		 * The name of the new file share that you want to create. The name can contain uppercase letters, lowercase letters, numbers, underscores (_), and hyphens (-).
		 * Required
		 */
		fsName: FormControl<string | null | undefined>,

		/**
		 * The size of the file share in gigabyte. Run `cf ic volume fs-flavor-list` or call the GET /volumes/fs/flavors/json API endpoint to retrieve a list of available file share sizes.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		fsSize: FormControl<number | null | undefined>,
	}
	export function CreateFileshareParamFormGroup() {
		return new FormGroup<FileshareParamFormProperties>({
			fsIOPS: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			fsName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fsSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FileshareUsage {

		/** The amount of space that is available in the file share in gigabytes. */
		available_space?: string | null;

		/** The total size of the file share in gigabytes. */
		total_space?: string | null;

		/** The amount of space that is currently used from the file share. */
		used_space?: string | null;

		/** The amount of space that is currently used from the file share in percentage. */
		used_space_percentage?: string | null;
	}
	export interface FileshareUsageFormProperties {

		/** The amount of space that is available in the file share in gigabytes. */
		available_space: FormControl<string | null | undefined>,

		/** The total size of the file share in gigabytes. */
		total_space: FormControl<string | null | undefined>,

		/** The amount of space that is currently used from the file share. */
		used_space: FormControl<string | null | undefined>,

		/** The amount of space that is currently used from the file share in percentage. */
		used_space_percentage: FormControl<string | null | undefined>,
	}
	export function CreateFileshareUsageFormGroup() {
		return new FormGroup<FileshareUsageFormProperties>({
			available_space: new FormControl<string | null | undefined>(undefined),
			total_space: new FormControl<string | null | undefined>(undefined),
			used_space: new FormControl<string | null | undefined>(undefined),
			used_space_percentage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FloatingIP {
		Bindings?: Binding;

		/** The public IP address that is allocated to the organization space. */
		IpAddress?: string | null;
	}
	export interface FloatingIPFormProperties {

		/** The public IP address that is allocated to the organization space. */
		IpAddress: FormControl<string | null | undefined>,
	}
	export function CreateFloatingIPFormGroup() {
		return new FormGroup<FloatingIPFormProperties>({
			IpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFileshareDetails {
		fs?: Array<Fileshare>;
		fsUsage?: Array<FileshareUsage>;

		/** A list of volume names that are mounted to the file share. */
		volnames?: Array<string>;
	}
	export interface GetFileshareDetailsFormProperties {
	}
	export function CreateGetFileshareDetailsFormGroup() {
		return new FormGroup<GetFileshareDetailsFormProperties>({
		});

	}

	export interface Group {

		/** Unique identifier representing a group. */
		Id?: string | null;

		/** Name of the group. */
		Name?: string | null;
	}
	export interface GroupFormProperties {

		/** Unique identifier representing a group. */
		Id: FormControl<string | null | undefined>,

		/** Name of the group. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageDetail {

		/** The hardware architecture for which the image was built for. The architecture can either be Intel (amd64) or Power (ppc64le). */
		Architecture?: string | null;
		Config?: ImageDetailConfig;

		/** ??? */
		Container?: string | null;
		ContainerConfig?: ContainerConfig;

		/** The time when the image was created. */
		Created?: string | null;

		/** ??? */
		DockerVersion?: string | null;

		/** Unique ID of the image that you inspected. */
		Id?: string | null;

		/** ??? */
		Os?: string | null;

		/** The ID of the parent image that was used to build this image. */
		Parent?: string | null;

		/**
		 * The real size of the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Size?: number | null;

		/** The version of the image */
		Tag?: string | null;

		/** ??? */
		Throwaway?: string | null;

		/**
		 * The virtual size of the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VirtualSize?: number | null;
	}
	export interface ImageDetailFormProperties {

		/** The hardware architecture for which the image was built for. The architecture can either be Intel (amd64) or Power (ppc64le). */
		Architecture: FormControl<string | null | undefined>,

		/** ??? */
		Container: FormControl<string | null | undefined>,

		/** The time when the image was created. */
		Created: FormControl<string | null | undefined>,

		/** ??? */
		DockerVersion: FormControl<string | null | undefined>,

		/** Unique ID of the image that you inspected. */
		Id: FormControl<string | null | undefined>,

		/** ??? */
		Os: FormControl<string | null | undefined>,

		/** The ID of the parent image that was used to build this image. */
		Parent: FormControl<string | null | undefined>,

		/**
		 * The real size of the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Size: FormControl<number | null | undefined>,

		/** The version of the image */
		Tag: FormControl<string | null | undefined>,

		/** ??? */
		Throwaway: FormControl<string | null | undefined>,

		/**
		 * The virtual size of the image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VirtualSize: FormControl<number | null | undefined>,
	}
	export function CreateImageDetailFormGroup() {
		return new FormGroup<ImageDetailFormProperties>({
			Architecture: new FormControl<string | null | undefined>(undefined),
			Container: new FormControl<string | null | undefined>(undefined),
			Created: new FormControl<string | null | undefined>(undefined),
			DockerVersion: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Os: new FormControl<string | null | undefined>(undefined),
			Parent: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			Tag: new FormControl<string | null | undefined>(undefined),
			Throwaway: new FormControl<string | null | undefined>(undefined),
			VirtualSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImageDetailConfig {
		ArgsEscaped?: boolean | null;

		/** Attaches the container to stderr. */
		AttachStderr?: boolean | null;

		/** Attaches the container to stdin. */
		AttachStdin?: boolean | null;

		/** Attaches the container to stdout. */
		AttachStdout?: boolean | null;

		/**
		 * The command and arguments in this list are passed to the container to be executed when the container is started. This command must be a long-running command. Do not use a short-lived command, for example, /bin/date, because it might cause the container to crash. <br>Sample long-running commands:<br>["ping","localhost"]<br>["tail","-f","/dev/null"]<br>["sh","-c","while true; do date; sleep 20; done"]
		 */
		Cmd?: Array<string>;

		/** The domain name to be used for the container. */
		Domainmame?: string | null;

		/** The entrypoint specifies a command that will always be executed when the container starts. */
		Entrypoint?: string | null;

		/** A list of environment variables in the form of key=value pairs. All keys in this list have to be unique. List multiple keys separately and if you include quotation marks, include them around both the environment variable name and the value. */
		Env?: Array<string>;

		/** A list of all udp and tcp ports that have been publicly exposed during the container creation. */
		ExposedPorts?: Array<string>;

		/** The host name of the container provided by Openstack. */
		Hostname?: string | null;

		/** The unique ID of the image. */
		Image?: string | null;

		/** List of custom metadata that was added to the image. Labels serve a wide range of uses, such as adding notes or license requirements to an image. Every label is a key/ value pair. */
		Labels?: Array<string>;

		/** ??? */
		OnBuild?: Array<string>;

		/** When set to true, it opens stdin. */
		OpenStdin?: boolean | null;

		/** When set to true it closes stdin after the attached client disconnects. */
		StdinOnce?: boolean | null;

		/** When set to true, attach standard streams to a tty, including stdin if it is not closed. */
		Tty?: boolean | null;

		/** The user to be used inside the container. */
		User?: string | null;

		/** Docker specific. Not supported by IBM Containers. The path to the volume that is created when deploying a container from the image. To use a volume in IBM Containers, you must first create a volume and then mount it to your container during creation. */
		Volumes?: string | null;

		/** The working directory inside the container where specified commands are executed. */
		WorkingDir?: string | null;
	}
	export interface ImageDetailConfigFormProperties {
		ArgsEscaped: FormControl<boolean | null | undefined>,

		/** Attaches the container to stderr. */
		AttachStderr: FormControl<boolean | null | undefined>,

		/** Attaches the container to stdin. */
		AttachStdin: FormControl<boolean | null | undefined>,

		/** Attaches the container to stdout. */
		AttachStdout: FormControl<boolean | null | undefined>,

		/** The domain name to be used for the container. */
		Domainmame: FormControl<string | null | undefined>,

		/** The entrypoint specifies a command that will always be executed when the container starts. */
		Entrypoint: FormControl<string | null | undefined>,

		/** The host name of the container provided by Openstack. */
		Hostname: FormControl<string | null | undefined>,

		/** The unique ID of the image. */
		Image: FormControl<string | null | undefined>,

		/** When set to true, it opens stdin. */
		OpenStdin: FormControl<boolean | null | undefined>,

		/** When set to true it closes stdin after the attached client disconnects. */
		StdinOnce: FormControl<boolean | null | undefined>,

		/** When set to true, attach standard streams to a tty, including stdin if it is not closed. */
		Tty: FormControl<boolean | null | undefined>,

		/** The user to be used inside the container. */
		User: FormControl<string | null | undefined>,

		/** Docker specific. Not supported by IBM Containers. The path to the volume that is created when deploying a container from the image. To use a volume in IBM Containers, you must first create a volume and then mount it to your container during creation. */
		Volumes: FormControl<string | null | undefined>,

		/** The working directory inside the container where specified commands are executed. */
		WorkingDir: FormControl<string | null | undefined>,
	}
	export function CreateImageDetailConfigFormGroup() {
		return new FormGroup<ImageDetailConfigFormProperties>({
			ArgsEscaped: new FormControl<boolean | null | undefined>(undefined),
			AttachStderr: new FormControl<boolean | null | undefined>(undefined),
			AttachStdin: new FormControl<boolean | null | undefined>(undefined),
			AttachStdout: new FormControl<boolean | null | undefined>(undefined),
			Domainmame: new FormControl<string | null | undefined>(undefined),
			Entrypoint: new FormControl<string | null | undefined>(undefined),
			Hostname: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined),
			OpenStdin: new FormControl<boolean | null | undefined>(undefined),
			StdinOnce: new FormControl<boolean | null | undefined>(undefined),
			Tty: new FormControl<boolean | null | undefined>(undefined),
			User: new FormControl<string | null | undefined>(undefined),
			Volumes: new FormControl<string | null | undefined>(undefined),
			WorkingDir: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageInfo {

		/**
		 * The time when your container image was created.
		 * Type: float
		 */
		Created?: number | null;

		/** The unique identifier representing a container image. */
		Id?: string | null;

		/** The name of your container image. */
		Image?: string | null;

		/** The full path to the private Bluemix registry where the image is stored including the registry name, the organization namespace, and image tag. */
		RepoTags?: Array<string>;

		/**
		 * The real size of the container image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Size?: number | null;

		/**
		 * The virtual size of the container image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VirtualSize?: number | null;
	}
	export interface ImageInfoFormProperties {

		/**
		 * The time when your container image was created.
		 * Type: float
		 */
		Created: FormControl<number | null | undefined>,

		/** The unique identifier representing a container image. */
		Id: FormControl<string | null | undefined>,

		/** The name of your container image. */
		Image: FormControl<string | null | undefined>,

		/**
		 * The real size of the container image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		Size: FormControl<number | null | undefined>,

		/**
		 * The virtual size of the container image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		VirtualSize: FormControl<number | null | undefined>,
	}
	export function CreateImageInfoFormGroup() {
		return new FormGroup<ImageInfoFormProperties>({
			Created: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Image: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
			VirtualSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Namespace {

		/** The namespace that is either set for an organization, or a namespace that is not available to be used in Bluemix. */
		namespace?: string | null;
	}
	export interface NamespaceFormProperties {

		/** The namespace that is either set for an organization, or a namespace that is not available to be used in Bluemix. */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateNamespaceFormGroup() {
		return new FormGroup<NamespaceFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Network {

		/** Alternative name of the private container network the container is connected to. */
		Aliases?: string | null;

		/** Unique ID representing a container. */
		EndpointID?: string | null;

		/** The private IP address of the network gateway in IPv4 format. */
		Gateway?: string | null;

		/** Private IP address of the container in IPv6 format. IBM Containers only supports IPv4 format. This attribute is returned as empty. */
		GlobalIPv6Address?: string | null;

		/**
		 * Not supported by IBM Containers, empty string.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		GlobalIPv6PrefixLen?: number | null;

		/** Specific configurations for the network driver. */
		IPAMConfig?: string | null;

		/** The prefix of the subnet in the private container network. The prefix indicates that 16 bits out of 32 bits are used to address the network. As every IPv4 IP adress consists of 32 bits, the last 16 bits are used to assign private IP addresses to the container. */
		IPPrefixLen?: string | null;

		/** The private IP address of the network gateway in IPv6 format. IBM Containers only supports IPv4 format. This attribute is returned as empty. */
		IPv6Gateway?: string | null;

		/** List of container names that are linked to the container. */
		Links?: string | null;

		/** The MAC address that is assigned to the container. */
		MacAddress?: string | null;

		/** Unique identifier representing the private container network. */
		NetworkID?: string | null;
	}
	export interface NetworkFormProperties {

		/** Alternative name of the private container network the container is connected to. */
		Aliases: FormControl<string | null | undefined>,

		/** Unique ID representing a container. */
		EndpointID: FormControl<string | null | undefined>,

		/** The private IP address of the network gateway in IPv4 format. */
		Gateway: FormControl<string | null | undefined>,

		/** Private IP address of the container in IPv6 format. IBM Containers only supports IPv4 format. This attribute is returned as empty. */
		GlobalIPv6Address: FormControl<string | null | undefined>,

		/**
		 * Not supported by IBM Containers, empty string.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		GlobalIPv6PrefixLen: FormControl<number | null | undefined>,

		/** Specific configurations for the network driver. */
		IPAMConfig: FormControl<string | null | undefined>,

		/** The prefix of the subnet in the private container network. The prefix indicates that 16 bits out of 32 bits are used to address the network. As every IPv4 IP adress consists of 32 bits, the last 16 bits are used to assign private IP addresses to the container. */
		IPPrefixLen: FormControl<string | null | undefined>,

		/** The private IP address of the network gateway in IPv6 format. IBM Containers only supports IPv4 format. This attribute is returned as empty. */
		IPv6Gateway: FormControl<string | null | undefined>,

		/** List of container names that are linked to the container. */
		Links: FormControl<string | null | undefined>,

		/** The MAC address that is assigned to the container. */
		MacAddress: FormControl<string | null | undefined>,

		/** Unique identifier representing the private container network. */
		NetworkID: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			Aliases: new FormControl<string | null | undefined>(undefined),
			EndpointID: new FormControl<string | null | undefined>(undefined),
			Gateway: new FormControl<string | null | undefined>(undefined),
			GlobalIPv6Address: new FormControl<string | null | undefined>(undefined),
			GlobalIPv6PrefixLen: new FormControl<number | null | undefined>(undefined),
			IPAMConfig: new FormControl<string | null | undefined>(undefined),
			IPPrefixLen: new FormControl<string | null | undefined>(undefined),
			IPv6Gateway: new FormControl<string | null | undefined>(undefined),
			Links: new FormControl<string | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			NetworkID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkSetting {

		/** The name of the private network bridge. */
		Bridge?: string | null;

		/** The IP address of the private network gateway in IPv4 format. */
		Gateway?: string | null;

		/**
		 * The private IP address that is assigned to the container.
		 * Required
		 */
		IpAddress: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		IpPrefixLen?: number | null;

		/** The MAC address that was assigned to the container. */
		MacAddress?: string | null;
		Network?: Network;

		/** Specific to Docker. List of private container ports and their mapping to the host ports. In IBM Containers all container ports are exposed on the host by default. This attribute is returned as an empty list. */
		PortMapping?: string | null;

		/** All ports of the container that were exposed to the public. */
		Ports?: Array<string>;

		/**
		 * The Public IP address that was bound to the container.
		 * Required
		 */
		PublicIpAddress: string;
	}
	export interface NetworkSettingFormProperties {

		/** The name of the private network bridge. */
		Bridge: FormControl<string | null | undefined>,

		/** The IP address of the private network gateway in IPv4 format. */
		Gateway: FormControl<string | null | undefined>,

		/**
		 * The private IP address that is assigned to the container.
		 * Required
		 */
		IpAddress: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		IpPrefixLen: FormControl<number | null | undefined>,

		/** The MAC address that was assigned to the container. */
		MacAddress: FormControl<string | null | undefined>,

		/** Specific to Docker. List of private container ports and their mapping to the host ports. In IBM Containers all container ports are exposed on the host by default. This attribute is returned as an empty list. */
		PortMapping: FormControl<string | null | undefined>,

		/**
		 * The Public IP address that was bound to the container.
		 * Required
		 */
		PublicIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkSettingFormGroup() {
		return new FormGroup<NetworkSettingFormProperties>({
			Bridge: new FormControl<string | null | undefined>(undefined),
			Gateway: new FormControl<string | null | undefined>(undefined),
			IpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IpPrefixLen: new FormControl<number | null | undefined>(undefined),
			MacAddress: new FormControl<string | null | undefined>(undefined),
			PortMapping: new FormControl<string | null | undefined>(undefined),
			PublicIpAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Port {

		/** Public IP address that was bound to the container in IPv4 format. */
		IP?: string | null;

		/** The private port of the container on which the container listens during run time. */
		PrivatePort?: string | null;

		/** The public port that was exposed during container creation. When a public port is exposed, a public IP address can be bound to the container which makes the container accessible from the internet. */
		PublicPort?: string | null;

		/** The type of IP protocol that is used for the port. It can either be `udp` or `tcp`. */
		Type?: string | null;
	}
	export interface PortFormProperties {

		/** Public IP address that was bound to the container in IPv4 format. */
		IP: FormControl<string | null | undefined>,

		/** The private port of the container on which the container listens during run time. */
		PrivatePort: FormControl<string | null | undefined>,

		/** The public port that was exposed during container creation. When a public port is exposed, a public IP address can be bound to the container which makes the container accessible from the internet. */
		PublicPort: FormControl<string | null | undefined>,

		/** The type of IP protocol that is used for the port. It can either be `udp` or `tcp`. */
		Type: FormControl<string | null | undefined>,
	}
	export function CreatePortFormGroup() {
		return new FormGroup<PortFormProperties>({
			IP: new FormControl<string | null | undefined>(undefined),
			PrivatePort: new FormControl<string | null | undefined>(undefined),
			PublicPort: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The public route that is mapped to the container group. You can use this route to access your container group from the Internet. */
	export interface Route {

		/** The default system domain is mybluemix.net and already provides a SSL certificate, so you can access your container groups with HTTPS without any additional configuration. */
		domain?: string | null;

		/** The host name of your container group, such as mycontainerhost. Do not include underscores (_) in the host name. The host and the domain combined form the full public route URL, such as http://mycontainerhost.mybluemix.net. */
		host?: string | null;
	}

	/** The public route that is mapped to the container group. You can use this route to access your container group from the Internet. */
	export interface RouteFormProperties {

		/** The default system domain is mybluemix.net and already provides a SSL certificate, so you can access your container groups with HTTPS without any additional configuration. */
		domain: FormControl<string | null | undefined>,

		/** The host name of your container group, such as mycontainerhost. Do not include underscores (_) in the host name. The host and the domain combined form the full public route URL, such as http://mycontainerhost.mybluemix.net. */
		host: FormControl<string | null | undefined>,
	}
	export function CreateRouteFormGroup() {
		return new FormGroup<RouteFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVolume {

		/** The name or ID of the space where you want to provision your existing volume. Run `cf spaces` to retrieve the name, or `cf space <space_name> --guid` to retrieve the space ID. */
		addSpaces?: Array<string>;

		/** The name or ID of the space from which you want to unprovision your existing volume. Run `cf spaces` to retrieve the name, or `cf space <space_name> --guid` to retrieve the space ID. */
		removeSpaces?: Array<string>;
	}
	export interface UpdateVolumeFormProperties {
	}
	export function CreateUpdateVolumeFormGroup() {
		return new FormGroup<UpdateVolumeFormProperties>({
		});

	}

	export interface Volume {

		/** Unique identifier representing the file share on which the volume is hosted. */
		fsID?: string | null;

		/** Full path to the mounted volume inside the container. */
		hostPath?: string | null;

		/** List of space IDs in which the volume is visible and can be used by all the single containers and container groups. */
		otherSpaceVisibility?: Array<string>;

		/** Unique identifier representing the space where the volume got created. */
		spaceGuid?: string | null;

		/** The name of the volume. */
		volName?: string | null;
	}
	export interface VolumeFormProperties {

		/** Unique identifier representing the file share on which the volume is hosted. */
		fsID: FormControl<string | null | undefined>,

		/** Full path to the mounted volume inside the container. */
		hostPath: FormControl<string | null | undefined>,

		/** Unique identifier representing the space where the volume got created. */
		spaceGuid: FormControl<string | null | undefined>,

		/** The name of the volume. */
		volName: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			fsID: new FormControl<string | null | undefined>(undefined),
			hostPath: new FormControl<string | null | undefined>(undefined),
			spaceGuid: new FormControl<string | null | undefined>(undefined),
			volName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContainerStatus {

		/**
		 * The unique identifier of the container.
		 * Required
		 */
		NameOrId: string;

		/** The current status of the container. The status can either be a transient one, such as BUILDING or NETWORKING, or a non-transient one, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED. */
		Status?: string | null;

		/** When set to true, the current container state is temporary and will change soon. An example for a transient state is the BUILDING state. A container that is created will be set to the BUILDING state until all container layers are created and the container is started. When set to false, the container state is permanent, such as CRASHED. */
		Transient?: boolean | null;
	}
	export interface GetContainerStatusFormProperties {

		/**
		 * The unique identifier of the container.
		 * Required
		 */
		NameOrId: FormControl<string | null | undefined>,

		/** The current status of the container. The status can either be a transient one, such as BUILDING or NETWORKING, or a non-transient one, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED. */
		Status: FormControl<string | null | undefined>,

		/** When set to true, the current container state is temporary and will change soon. An example for a transient state is the BUILDING state. A container that is created will be set to the BUILDING state until all container layers are created and the container is started. When set to false, the container state is permanent, such as CRASHED. */
		Transient: FormControl<boolean | null | undefined>,
	}
	export function CreateGetContainerStatusFormGroup() {
		return new FormGroup<GetContainerStatusFormProperties>({
			NameOrId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<string | null | undefined>(undefined),
			Transient: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create and start a single container
		 * This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app.
		 * In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container.
		 * To create a container with IBM Containers, you must at least define the image that the container is based on.
		 * - Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.
		 * Post containers/create
		 * @param {string} name Choose a name for your container. The characters in the name can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-), but the name must start with a letter.
		 * @param {CreateContainer} requestBody Summary of input parameter to create a container in IBM Containers.
		 * @return {void} 
		 */
		ContainersCreatePostByName(name: string | null | undefined, requestBody: CreateContainer, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/create?name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List available public IP addresses in a space
		 * This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).
		 * Get containers/floating-ips
		 * @param {boolean} all If this option is set to `all=1`, `all=True`, or `all=true`, all public IP addresses that are allocated to a space are returned. If this option is set to `all=0`, `all=False`, or `all=false`, only available public IP addresses that are allocated but not bound to a container are returned. By default, only available public IP addresses are returned.
		 * @return {Array<FloatingIP>} OK. A list of public IP addresses that are allocated to the space is returned.
		 */
		ContainersFloating_ipsGetByAll(all: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<FloatingIP>> {
			return this.http.get<Array<FloatingIP>>(this.baseUri + 'containers/floating-ips?all=' + all, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Request a public IP address for a space
		 * This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.
		 * Post containers/floating-ips/request
		 * @return {string} OK. A new public IP address is allocated to your space.
		 */
		ContainersFloating_ipsRequestPost(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'containers/floating-ips/request', null, { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Release public IP address
		 * This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.
		 * Post containers/floating-ips/{ip}/release
		 * @param {string} ip The public IP address that you want to release. Run `cf ic ip list` or call the `GET /containers/floating-ips?all=true` endpoint to review all public IP address that are allocated to your space. After a public IP address is released, it will no longer be allocated to your space.
		 * @return {void} 
		 */
		ContainersFloating_ips_ipReleasePost(ip: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/floating-ips/' + (ip == null ? '' : encodeURIComponent(ip)) + '/release', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all container groups in a space
		 * This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).
		 * Get containers/groups
		 * @return {Array<ContainersGroupsGetListItem>} OK. A list of container groups is returned.
		 */
		ContainersGroupsGet(headersHandler?: () => HttpHeaders): Observable<Array<ContainersGroupsGetListItem>> {
			return this.http.get<Array<ContainersGroupsGetListItem>>(this.baseUri + 'containers/groups', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create and start a container group.
		 * This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.
		 * To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
		 * - Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-).
		 * - Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.
		 * Post containers/groups
		 * @param {ContainersGroupsPostRequiredAttributes} requestBody Attributes that are required to create a container group in your space.
		 * @return {void} 
		 */
		ContainersGroupsPost(requestBody: ContainersGroupsPostRequiredAttributes, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/groups', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop and delete all container instances in a container group.
		 * Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.
		 * Delete containers/groups/{name_or_id}
		 * @param {string} name_or_id The name or unique ID of the container group that you want to delete. Run `cf ic group list` or call the `GET /containers/groups` endpoint to retrieve a list of container groups in your space.
		 * @param {string} force If you want to force the deletion of a container group that has running container instances, use the force option. This parameter needs to be set to either true or false. If set to `force=true`, `force=True`, or `force=1`, running container instances are deleted. If set to `force=false`, `force=False`, or `force=0`, running container instances are not deleted. If you do not specify this paramater, running container instances are not deleted by default. 
		 * @return {void} 
		 */
		ContainersGroups_name_or_idDeleteByForce(name_or_id: string, force: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'containers/groups/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '&force=' + (force == null ? '' : encodeURIComponent(force)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inspect a container group.
		 * This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).
		 * Get containers/groups/{name_or_id}
		 * @param {string} name_or_id The name or unique ID of the container group that you want to inspect. Run `cf ic group list` or call the `GET /containers/groups` endpoint to retrieve a list of container groups in your space.
		 * @return {ContainersGroupsNameOrIdGetDetails} OK. A detailed list of information about a container group is retrieved.
		 */
		ContainersGroups_name_or_idGet(name_or_id: string, headersHandler?: () => HttpHeaders): Observable<ContainersGroupsNameOrIdGetDetails> {
			return this.http.get<ContainersGroupsNameOrIdGetDetails>(this.baseUri + 'containers/groups/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a container group.
		 * Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`).
		 * Note: You can run only one update at a time.
		 * The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances.
		 * Patch containers/groups/{name_or_id}
		 * @param {string} name_or_id The name or unique ID of the container group that you want to update.
		 * @param {ContainersGroupsNameOrIdPatchUpdatedInfo} requestBody The container group parameter that you want to update.
		 * @return {void} 
		 */
		ContainersGroups_name_or_idPatch(name_or_id: string, requestBody: ContainersGroupsNameOrIdPatchUpdatedInfo, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'containers/groups/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Map a public route to a container group.
		 * If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.
		 * Post containers/groups/{name_or_id}/maproute
		 * @param {string} name_or_id The name or unique ID of the container group to which you want to map a public route. Run `cf ic group list` or call the `GET /containers/groups` endpoint to retrieve a list of container groups in your space.
		 * @param {Route} requestBody The public route that is mapped to the container group. A public route consists of the host name and domain.
		 * @return {void} 
		 */
		ContainersGroups_name_or_idMaproutePost(name_or_id: string, requestBody: Route, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/groups/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/maproute', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Unmap a public route from a container group
		 * This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet.
		 * When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups.
		 * Post containers/groups/{name_or_id}/unmaproute
		 * @param {string} name_or_id The name or unique ID (UUID) of the container group that you want to inspect.
		 * @param {Route} requestBody The public route that is unmapped from the container group. A public route consists of the host name and domain.
		 * @return {void} 
		 */
		ContainersGroups_name_or_idUnmaproutePost(name_or_id: string, requestBody: Route, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/groups/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/unmaproute', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List single containers in a space.
		 * This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.
		 * Get containers/json
		 * @param {string} all By default, the `GET /containers/json` endpoint returns a list of all single containers in a space that are in a running state. To request a list of all containers independent of their current state, set the `all` query parameter to true. Allowed values are: `all=true`, `all=True`, and `all=1`. 
		 * @param {string} filters You can filter your containers by any environment variable key or value that is listed in the `Env` section of your CLI/ API response when you run the `cf ic inspect <container>` command, or call the `GET /containers/{id}/json` endpoint. Your search criteria does not need to be an exact match. It can also be a part of the key or value you are looking for. For example, to filter all containers with an environment variable that contains `id` in one of their environment variables, use `filter=id`.
		 * @return {Array<Container>} OK. A list of single containers that match the search criteria is returned.
		 */
		ContainersJsonGetByAllAndFilters(all: string | null | undefined, filters: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Container>> {
			return this.http.get<Array<Container>>(this.baseUri + 'containers/json?all=' + (all == null ? '' : encodeURIComponent(all)) + '&filters=' + (filters == null ? '' : encodeURIComponent(filters)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List messages for the user
		 * This endpoint retrieves all IBM Containers system messages for the user.
		 * Get containers/messages
		 * @return {ContainersMessagesGetReturn} OK. A list of messages is returned.
		 */
		ContainersMessagesGet(headersHandler?: () => HttpHeaders): Observable<ContainersMessagesGetReturn> {
			return this.http.get<ContainersMessagesGetReturn>(this.baseUri + 'containers/messages', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve organization and space specific quota
		 * Retrieve the quota that is assigned to the organization and space.
		 * Get containers/quota
		 * @return {ContainersQuotaInfo} OK. The current quota that is assigned to the organization and space is returned. 
		 */
		ContainersQuotaGet(headersHandler?: () => HttpHeaders): Observable<ContainersQuotaInfo> {
			return this.http.get<ContainersQuotaInfo>(this.baseUri + 'containers/quota', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update space quota
		 * This endpoint updates the quota that is allocated to a Bluemix space.
		 * **Note**: Only paid accounts are eligbile to update the space quota. If you are using a free-trial account, upgrade to a paid account first.
		 * Put containers/quota
		 * @param {ContainersQuotaList} requestBody The space quota details that you want to update.
		 * @return {void} 
		 */
		ContainersQuotaPut(requestBody: ContainersQuotaList, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'containers/quota', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List container sizes and quota limits
		 * This endpoint returns a list of available container sizes and the quota limit and usage for the space.
		 * - Container sizes: A list of available container sizes indicating the amount of container memory, disk space and virtual CPUs that can be assigned to the container.
		 * - Quota limit: Lists the number of containers, public IP addresses, available container memory, and virtual CPUS that are allocated to a space.
		 * - Quota usage: Lists the current number of containers, images, and public IP addresses in a space that is counted towards your quota limit.
		 * Get containers/usage
		 * @return {ContainersUsageInfo} OK. A list of available container sizes as well as the quota limit and usage for a space is returned. 
		 */
		ContainersUsageGet(headersHandler?: () => HttpHeaders): Observable<ContainersUsageInfo> {
			return this.http.get<ContainersUsageInfo>(this.baseUri + 'containers/usage', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List latest API version
		 * This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.
		 * Get containers/version
		 * @return {ContainersVersionGetInfo} OK. A list of the current API and microservices versions is returend.
		 */
		ContainersVersionGet(headersHandler?: () => HttpHeaders): Observable<ContainersVersionGetInfo> {
			return this.http.get<ContainersVersionGetInfo>(this.baseUri + 'containers/version', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List the current state of a container.
		 * This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.
		 * Get containers/{id}/status
		 * @param {string} id The unique identifier that represents the container. Run `cf ic ps`, or call the `GET /containers/json` endpoint to retrieve the ID of the container.
		 * @return {void} 
		 */
		Containers_idStatusGet(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'containers/' + (id == null ? '' : encodeURIComponent(id)) + '/status', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a single container
		 * Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.
		 * Delete containers/{name_or_id}
		 * @param {string} name_or_id The unique identifier or name of the container that you want to delete. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review all containers in your space.
		 * @param {boolean} force Use the `force` query parameter if you want to delete the container independent of their current state. The container does not need to be stopped first. To force the deletion of a container, enter `force=true`, `force=True`, or `force=1`. If you want to delete containers that are in a non-running state only, do either not set this query parameter, or enter `force=false`, `force=False`, or `force=0`.
		 * @return {void} 
		 */
		Containers_name_or_idDeleteByForce(name_or_id: string, force: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'containers/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '&force=' + force, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Bind a public IP address to a single container
		 * This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.
		 * Post containers/{name_or_id}/floating-ips/{ip}/bind
		 * @param {string} name_or_id The name or ID of the container that you want to bind to the public IP address. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space.
		 * @param {string} ip The public IP address that you want to bind to your container. 
		 * Note: The public IP address must be available in the space and not bound to a container. Run `cf ic ip list` or call the `GET /containers/floating-ips` endpoint.
		 * @return {void} 
		 */
		Containers_name_or_idFloating_ips_ipBindPost(name_or_id: string, ip: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/floating-ips/' + (ip == null ? '' : encodeURIComponent(ip)) + '/bind', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unbind a public IP address from a container
		 * This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers.
		 * Post containers/{name_or_id}/floating-ips/{ip}/unbind
		 * @param {string} name_or_id The name or ID of the container that you want to bind to the public IP address. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space. 
		 * @param {string} ip The public IP address that you want to unbind from your container. 
		 *  Note: After unbinding a public IP address, this IP address will still be allocated to the space and can be used to be bound to other containers.
		 * @return {void} 
		 */
		Containers_name_or_idFloating_ips_ipUnbindPost(name_or_id: string, ip: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/floating-ips/' + (ip == null ? '' : encodeURIComponent(ip)) + '/unbind', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inspect a single container
		 * This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).
		 * Get containers/{name_or_id}/json
		 * @param {string} name_or_id The name or ID of the container that you want to inspect. Run the `cf ic ps` command or call the `GET /containers/json` endpoint to retrieve a list of containers in your space.
		 * @return {ContainerInfo} OK. A list with detailed information about the container is returned. 
		 */
		Containers_name_or_idJsonGet(name_or_id: string, headersHandler?: () => HttpHeaders): Observable<ContainerInfo> {
			return this.http.get<ContainerInfo>(this.baseUri + 'containers/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/json', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Pause a single container
		 * Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).
		 * Post containers/{name_or_id}/pause
		 * @param {string} name_or_id The unique identifier or name of the container that you want to pause. Run `cf ic ps` or call the `GET /containers/json` endpoint to review all containers in your space that are currently in a running state.
		 * @return {void} 
		 */
		Containers_name_or_idPausePost(name_or_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/pause', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rename a single container
		 * Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`).
		 * Post containers/{name_or_id}/rename
		 * @param {string} name_or_id The unique identifier or name of the container that you want to rename. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review all containers in your space.
		 * @param {string} name The new name for the container. The characters in the name can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-), but the name must start with a letter.
		 * @return {void} 
		 */
		Containers_name_or_idRenamePostByName(name_or_id: string, name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/rename&name=' + (name == null ? '' : encodeURIComponent(name)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Restart a single container
		 * Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).
		 * Post containers/{name_or_id}/restart
		 * @param {string} name_or_id The unique identifier or name of the container that you want to restart. Run `cf ic ps` or call the `GET /containers/json` endpoint to review all containers in your space.
		 * @param {number} t The number of seconds to wait before the container is restarted. For example, if you want a container to restart after 10 seconds, enter `t=10`.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Containers_name_or_idRestartPostByT(name_or_id: string, t: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/restart&t=' + t, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Start a single container
		 * Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).
		 * Post containers/{name_or_id}/start
		 * @param {string} name_or_id The unique identifier or name of the container that you want to start. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review the containers in your space that are currently not in a running state.
		 * @return {void} 
		 */
		Containers_name_or_idStartPost(name_or_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/start', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stop a single container
		 * Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).
		 * Post containers/{name_or_id}/stop
		 * @param {string} name_or_id The unique identifier or name of the container that you want to stop. Run `cf ic ps` or call the `GET /containers/json` endpoint to review the containers in your space that are currently in a running state.
		 * @param {number} t The number of seconds to wait before the container is stopped. For example, if you want a container to stop after 10 seconds, enter `t=10`.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 
		 */
		Containers_name_or_idStopPostByT(name_or_id: string, t: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/stop&t=' + t, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Unpause a single container
		 * Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).
		 * Post containers/{name_or_id}/unpause
		 * @param {string} name_or_id The unique identifier or name of the container that you want to unpause. Run `cf ic ps -a` or call the `GET /containers/json?all=true` endpoint to review all containers in your space.
		 * @return {void} 
		 */
		Containers_name_or_idUnpausePost(name_or_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'containers/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/unpause', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all Docker images that are available in your private Bluemix registry.
		 * This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.
		 * Get images/json
		 * @return {ImageInfo} OK. A list of all available Docker images in the private Bluemix registry is returned.
		 */
		ImagesJsonGet(headersHandler?: () => HttpHeaders): Observable<ImageInfo> {
			return this.http.get<ImageInfo>(this.baseUri + 'images/json', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove a Docker image.
		 * Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).
		 * Delete images/{id}
		 * @param {string} id The unique identifier representing a Docker image. Run `cf ic images`, or call the `GET /images/json` endpoint to review the Docker images that are available in your private Bluemix registry.
		 * @return {void} 
		 */
		Images_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'images/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inspect a Docker image in private Bluemix registry
		 * This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).
		 * Get images/{name_or_id}/json
		 * @param {string} name_or_id The full private Bluemix registry path to your image or the unique ID of the image that you want to inspect. Run `cf ic images` or call the `GET /images/json` endpoint to review the images in your private Bluemix registry. 
		 * @return {ImageDetail} OK. A list of details about the container image is returned.
		 */
		Images_name_or_idJsonGet(name_or_id: string, headersHandler?: () => HttpHeaders): Observable<ImageDetail> {
			return this.http.get<ImageDetail>(this.baseUri + 'images/' + (name_or_id == null ? '' : encodeURIComponent(name_or_id)) + '/json', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve the namespace of an organization.
		 * This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).
		 * Get registry/namespaces
		 * @return {Namespace} OK. The namespace of the organization is returned.
		 */
		RegistryNamespacesGet(headersHandler?: () => HttpHeaders): Observable<Namespace> {
			return this.http.get<Namespace>(this.baseUri + 'registry/namespaces', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Check the availability of a namespace
		 * This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization.
		 * Consider the following rules when choosing a namespace for your organization:
		 * - Every organization can have one namespace at a time only
		 * - The namespace must be unique in Bluemix.
		 * - The namespace can be 4-30 characters long.
		 * - The namespace must start with at least one letter or number.
		 * - The namespace can only contain lowercase letters, numbers or underscores (_).
		 * Get registry/namespaces/{namespace}
		 * @param {string} namespace The name of the namespace that you would like to use for your organization and for which you would like to check availability in Bluemix.
		 * @return {Namespace} OK. The namespace that you chose is already used in Bluemix. Choose another namespace and re-run the API call.
		 */
		RegistryNamespaces_namespaceGet(namespace: string, headersHandler?: () => HttpHeaders): Observable<Namespace> {
			return this.http.get<Namespace>(this.baseUri + 'registry/namespaces/' + (namespace == null ? '' : encodeURIComponent(namespace)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Set a namespace for your private Bluemix registry.
		 * Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry.
		 * The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization:
		 * - Every organization can have one namespace at a time only
		 * - The namespace must be unique in Bluemix.
		 * - The namespace can be 4-30 characters long.
		 * - The namespace must start with at least one letter or number.
		 * - The namespace can only contain lowercase letters, numbers or underscores (_).
		 * Put registry/namespaces/{namespace}
		 * @param {string} namespace The name for your namespace to create your private Docker images registry in Bluemix. You cannot change the name afterward. The namespace can be 4-30 characters long, must start with at least one letter or number, and can only contain lowercase letters, numbers or underscores (_). You can test the availability of your namespace by calling the `GET /registry/namespaces/<namespace>` endpoint. When a HTTP code `404 Not Found` is returned, the namespace is available in Bluemix. 
		 * @return {void} 
		 */
		RegistryNamespaces_namespacePut(namespace: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'registry/namespaces/' + (namespace == null ? '' : encodeURIComponent(namespace)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve the TLS Certificate
		 * This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.
		 * Get tlskey
		 * @return {Certificate} Ok. A list of certificates is returned
		 */
		TlskeyGet(headersHandler?: () => HttpHeaders): Observable<Certificate> {
			return this.http.get<Certificate>(this.baseUri + 'tlskey', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Refresh the TLS Certificate
		 * This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).
		 * Put tlskey/refresh
		 * @return {void} 
		 */
		TlskeyRefreshPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tlskey/refresh', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a volume in a space
		 * This endpoints creates a new volume in your space (corresponding IBM Containers command: `cf ic volume create VOLNAME`). A volume is used to persist and access app data between container restarts. Volumes are hosted on file shares that define the available actual storage in Bluemix and the number of input and output transactions per second (IOPS).
		 * After you have created a volume, you must mount it to a container by using the `--volume` option in the `cf ic run` (single containers) or `cf ic group create` (container groups) command. You can also define the volume as part of the HTTP body and send a request to the `POST /containers/create` (single containers) or `POST /containers/groups` (container groups) endpoints.
		 * Note: If you mount multiple containers in a space to the same volume, they share the data in the volume and can access them anytime. When a container is deleted, the associated volume is not removed.
		 * Post volumes/create
		 * @param {string} name The name of the volume. The name must be unique for a space and can contain uppercase letters, lowercase letters, numbers, underscores (_), and hyphens (-).
		 * @param {string} fsName The name of the file share that the volume is hosted on. File shares can have different storage sizes and IOPS based on the required workload. If this field is left blank, the volume is hosted on the default file share.
		 * @return {void} 
		 */
		VolumesCreatePostByNameAndFsName(name: string, fsName: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'volumes/create?name=' + (name == null ? '' : encodeURIComponent(name)) + '&fsName=' + (fsName == null ? '' : encodeURIComponent(fsName)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a file share in a space
		 * This endpoint creates a new file share in a space (corresponding IBM Containers command: `cf ic volume fs-create FSNAME FSSIZE FSIOPS`).
		 * A file share is a persistent NFS-based (Network File System) storage system that hosts Docker volumes in a Bluemix space and allows a user to store and access container and app-related files. To store files in a file share, you must create a container volume and save the data into this volume.
		 * As soon as you create your first volume in a space with the `cf ic volume create VOLNAME` command or the `POST /volumes/create` API endpoint, a default file share with 20 GB at 4 IOPS (Input Output operations Per Second) is created at no cost.
		 * The organization manager can create file shares with specific storage size and IOPS to meet the storage needs of the space. File shares can be provisioned in sizes from 20 GB to 12 TB and at IOPS per GB of 0.25, 2 or 4. Run `cf ic volume fs-flavor-list` or call the `GET /volumes/fs/flavors/json` API endpoint to retrieve a list of available file share sizes. The file share size in relation to the number of IOPS impacts the speed that data can be read and written from and to the container volume.
		 * Post volumes/fs/create
		 * @param {FileshareParam} requestBody The input parameter to create a new file share in a space.
		 * @return {void} 
		 */
		VolumesFsCreatePost(requestBody: FileshareParam, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'volumes/fs/create', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List available file share sizes
		 * This endpoint returns a list of available file shares in gigabyte (corresponding IBM Containers command: `cf ic volume fs-flavor-list`).
		 * Get volumes/fs/flavors/json
		 * @return {Array<number>} OK. A list of available file share sizes in gigabyte is returned.
		 */
		VolumesFsFlavorsJsonGet(headersHandler?: () => HttpHeaders): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'volumes/fs/flavors/json', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List available file shares in a space
		 * This endpoint returns a list of all file shares that are availble in a space (corresponding IBM Containers command: `cf ic volume fs-list`).
		 * Get volumes/fs/json
		 * @return {Array<Fileshare>} OK. A list of available file shares is returned.
		 */
		VolumesFsJsonGet(headersHandler?: () => HttpHeaders): Observable<Array<Fileshare>> {
			return this.http.get<Array<Fileshare>>(this.baseUri + 'volumes/fs/json', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a file share
		 * This endpoint deletes a file share from a space (corresponding IBM Containers command: `cf ic volume fs-rm FSNAME`).
		 * Before you can delete a file share, all mounted volumes must be deleted first. To delete a volume, run `cf ic volume rm VOLNAME` or call the `DELETE /volumes/{name}` API endpoint.
		 * **Note:** To delete a file share you must have been granted organization developer rights.
		 * Delete volumes/fs/{name}
		 * @param {string} name The name of the file share that you want to delete. Run `cf ic volume fs-list` or call the `GET /volumes/fs/json` API endpoint to retrieve a list of available file shares in your space.
		 * @return {void} 
		 */
		VolumesFs_nameDelete(name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'volumes/fs/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inspect a file share
		 * This endpoint returns detailed information about a file share (corresponding IBM Containers command: `cf ic volume fs-inspect FSNAME`).
		 * Get volumes/fs/{name}/json
		 * @param {string} name The name of the file share that you want to inspect. Run `cf ic volume fs-list` or call the `GET /volumes/fs/json` endpoint to retrieve a list of available file shares in your space.
		 * @return {Array<GetFileshareDetails>} OK. Detailed information about a file share is returned.
		 */
		VolumesFs_nameJsonGet(name: string, headersHandler?: () => HttpHeaders): Observable<Array<GetFileshareDetails>> {
			return this.http.get<Array<GetFileshareDetails>>(this.baseUri + 'volumes/fs/' + (name == null ? '' : encodeURIComponent(name)) + '/json', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List all volumes for a space
		 * This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).
		 * Get volumes/json
		 * @return {Array<Volume>} OK. A list containing all volumes of a given space is returned.
		 */
		VolumesJsonGet(headersHandler?: () => HttpHeaders): Observable<Array<Volume>> {
			return this.http.get<Array<Volume>>(this.baseUri + 'volumes/json', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete a volume
		 * Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost.
		 * Delete volumes/{name}
		 * @param {string} name The name of the volume that you want to delete. Run `cf ic volume list` or call the `GET /volumes/json` endpoint to retrieve a list of all volumes that are available in your space.
		 * @return {void} 
		 */
		Volumes_nameDelete(name: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'volumes/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Share a volume with another space
		 * This endpoint provisions an existing volume that was created in one space to another space within the same organization. Single containers and container groups in each space can read and write to the shared volume. The volume remains owned by the original space it was created in, including management and billing. For example, the volume can be deleted from the original space only.
		 * Post volumes/{name}
		 * @param {string} name The name of the volume that you want to share with another space in your organization.
		 * @param {UpdateVolume} requestBody Input parameter that are required to provision an existing volume to a new space and to unprovision it from a space.
		 * @return {Volume} Ok. A list with detailed information about the volume is returned. Review the changes in the `otherSpaceVisibility` property.
		 */
		Volumes_namePost(name: string, requestBody: UpdateVolume, headersHandler?: () => HttpHeaders): Observable<Volume> {
			return this.http.post<Volume>(this.baseUri + 'volumes/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve detailed information about a volume.
		 * Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).
		 * Get volumes/{name}/json
		 * @param {string} name The name of the volume, for which you want to retrieve detailed information. Run `cf ic volume list` or call the `GET /volumes/json` endpoint to retrieve a list of all volumes that are available in your space.
		 * @return {Volume} Ok. A list with detailed information about the volume is returned. 
		 */
		Volumes_nameJsonGet(name: string, headersHandler?: () => HttpHeaders): Observable<Volume> {
			return this.http.get<Volume>(this.baseUri + 'volumes/' + (name == null ? '' : encodeURIComponent(name)) + '/json', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface ContainersMessagesGetReturn {

		/** Timestamp when the message was created. */
		created_date?: string | null;

		/** Important information for the IBM Containers user. */
		message?: string | null;
	}
	export interface ContainersMessagesGetReturnFormProperties {

		/** Timestamp when the message was created. */
		created_date: FormControl<string | null | undefined>,

		/** Important information for the IBM Containers user. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateContainersMessagesGetReturnFormGroup() {
		return new FormGroup<ContainersMessagesGetReturnFormProperties>({
			created_date: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

}

